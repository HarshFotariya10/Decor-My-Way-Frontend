import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit{

  constructor(private http :HttpClient){}
  ngOnInit(): void {
    this.getFurnitureCategory();
  }

  furnitureCategory :any[] = [];
    getFurnitureCategory(){
      this.http.get('http://localhost:8080/categories/furniture').subscribe((data:any)=>{ 
        this.furnitureCategory=data;
        console.log(this.furnitureCategory)
      })
    }
}
