import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private http: HttpClient, private sharedService: SharedService) { }
  Email: any

  ngOnInit() {
    this.sharedService.sharedDataEmail$.subscribe((Email) => {
      this.Email = Email;
      this.getProfiledata(Email)
    });
  }

  profileData: any = {};

  getProfiledata(email: any):void {
    this.http.get(`http://localhost:8080/getemail/${email}`).subscribe((data: any) => {
      this.profileData = data; 
      console.log(this.profileData?.id)
      this.SendUserId(this.profileData?.id);  
    });
  }
  SendUserId(UserId:number)
  {
    this.sharedService.setSharedDataUserID(UserId);
  }



  showorderpage = true;
  order() {
    this.showorderpage = false
  }
  profilepage() {
    this.showorderpage = true

  }
}
