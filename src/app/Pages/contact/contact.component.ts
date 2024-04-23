import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('http://localhost:8080/email/contact-us', this.formData)
      .subscribe(
        response => {
          
          alert("Thank You For Contacting Us");
          // Optionally, reset the form
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
        },
        error => {
          console.error('Error sending email:', error);
        }
      );
  }

}
