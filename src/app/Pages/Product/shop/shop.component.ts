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
      console.log(categoryID)
      this.SelectCategory(categoryID)
    });
  }

  SelectedCategory :any[] = [];
  SelectCategory(categoryID:number){
    this.http.get(`http://localhost:8080/product/category/${categoryID}`).subscribe((data:any)=>{ 
      this.SelectedCategory=data;
      console.log(this.SelectedCategory)
    })
  }
 
}
