import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent implements OnInit {
  constructor(private http :HttpClient,private sharedService: SharedService){}
  searchKeyword:any;
  ngOnInit() {
    this.sharedService.sharedDataString$.subscribe((searchKeyword) => {
     this.searchKeyword = searchKeyword;
     console.log(searchKeyword); 
     this.searchproduct();     
    });
  }
  searchList :any[] = [];
  searchproduct(){
    this.http.get(`http://localhost:8080/product/search/${this.searchKeyword}`).subscribe((data: any) => {
      this.searchList = data;
      console.log(this.searchList);
    });
  }

}
