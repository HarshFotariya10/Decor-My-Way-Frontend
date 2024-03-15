import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
  placeOrder() {
    // Logic for placing the order
    console.log('Order placed!');
  }
}
