import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private http :HttpClient,private sharedService: SharedService){}
  ngOnInit():void  {
    this.sharedService.isAuthenticated$.subscribe((data)=>{
      this.isUserLoggedin = data;
    });
     //
     this.sharedService.sharedDataUserId$.subscribe((data)=>{
      this.UserId=data
    });
    this.http.get(`http://localhost:8080/cart/view/${this.UserId}`).subscribe((data:any)=>{
      this.CartData=data;
      console.log(this.CartData)
    }) 
  }
  isUserLoggedin=false;



  
  ProductId:any[]=[]
  UserId:any;


  
}
