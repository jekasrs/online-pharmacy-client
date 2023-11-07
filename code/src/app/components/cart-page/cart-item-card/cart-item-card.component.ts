import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css']
})
export class CartItemCardComponent {
  title: 'cart-item-card'
  quantity: number = 1

  increaseQuantity()
  {
    this.quantity++;
  }

  decreaseQuantity()
  {
    if (this.quantity != 1)
    {
      this.quantity--;
    }
  }
}
