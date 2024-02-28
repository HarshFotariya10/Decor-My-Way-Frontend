import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  categoryID:any;
  
  
  constructor(private http :HttpClient,private sharedService: SharedService){}
  ngOnInit() {
    this.sharedService.sharedData$.subscribe((categoryID) => {
      this.categoryID = categoryID;
      this.SelectCategory(categoryID)
    });
    //Fetch Authenticated Value  
    this.sharedService.isAuthenticated$.subscribe((data)=>{
      this.isUserLoggedin = data;
    })
    //Fetch User Id From Account Component
    this.sharedService.sharedDataUserId$.subscribe((data)=>{
      this.UserId=data
    })
  }
  // Api Implementation
  SelectedCategory :any[] = [];
  SelectCategory(categoryID:number){
    this.http.get(`http://localhost:8080/product/category/${categoryID}`).subscribe((data:any)=>{ 
      this.SelectedCategory=data;
  
    })
  }

//Add to Cart Implementation
isUserLoggedin=false;
result:any
  UserId:any;
  AddtoCart(productId:number):void{
    if(this.isUserLoggedin == true)
    {
      
     
      const body ={}
      console.log(this.UserId);

      this.http.post(`http://localhost:8080/cart/add/${this.UserId}/${productId}`,body).subscribe((data:any)=>{
      this.result=data;
      alert("Added to Cart Succefully !!")
      })
    }
    else{
      alert("Please Login !!!!")
    }
  }
}
