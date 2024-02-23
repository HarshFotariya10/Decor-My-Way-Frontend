import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-decoritems',
  templateUrl: './decoritems.component.html',
  styleUrls: ['./decoritems.component.css']
})
export class DecoritemsComponent {
  constructor(private http :HttpClient){}
  ngOnInit(): void {
    this.getFurnitureCategory();
  }

  decorItemCategory :any[] = [];
    getFurnitureCategory(){
      this.http.get('http://localhost:8080/categories/decoritems').subscribe((data:any)=>{ 
        this.decorItemCategory=data;
        console.log(this.decorItemCategory)
      })
    }
}
