import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

export interface CartItem {
  productId: number;
  quantity: number;
  price: number;
  productname: string;  
  imagename: string;
}

export interface CartData {
  cartId: null;
  userId: number;
  totalamount: number;
  cartItems: CartItem[];
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent implements OnInit{

  CartData: CartData[] = [{
    cartId: null,
    userId: 0,
    totalamount: 0,
    cartItems: [
      {
        productId: 0,
        quantity: 0,
        price: 0,
        productname: '',  
        imagename: ''
      } 
    ]
}];

  constructor(private http :HttpClient,private router: Router,private sharedService: SharedService){}
  ngOnInit():void  {
    this.sharedService.isAuthenticated$.subscribe((data)=>{
      this.isUserLoggedin = data;
    });
     //
     this.sharedService.sharedDataUserId$.subscribe((data)=>{
      this.UserId=data
    });
    this.cart();
  }
  isUserLoggedin=false;



  
  ProductId:any[]=[]
  UserId:any;
  cart(){
    this.http.get(`http://localhost:8080/cart/view/${this.UserId}`).subscribe((data:any)=>{
      this.CartData=data;
      console.log(this.CartData)
    }) 
  }
  reduceQuantity(productId:number){
    const body ={}
    this.http.post(`http://localhost:8080/cart/reduceQuantity/${this.UserId}/${productId}`,body).subscribe((data:any)=>{
    this.ngOnInit();  
  });    
  }
  Addcart(productId:number){
    const body ={}
      
    this.http.post(`http://localhost:8080/cart/add/${this.UserId}/${productId}`, body).subscribe((data: any) => {
      
      if (data.message == 'Product added to cart successfully') {
        this.ngOnInit(); 
        
      } 
    },
    (error) => {
      
      alert('Product quantity not available');
    });
  }
  
  
}
