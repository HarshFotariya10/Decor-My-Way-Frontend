import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  showorderpage = true;
  order()
  {
    this.showorderpage = false
  }
  profilepage()
  {
    this.showorderpage = true
    
  }
}
