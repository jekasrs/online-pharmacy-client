import {Component, Input} from '@angular/core';
import {IItem} from "../../../models/item";

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css']
})
export class CartItemCardComponent {
  title: 'cart-item-card'
  quantity: number = 1
  cost: number
  @Input() item: IItem

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

  calculateCost(itemCost: number, itemQuantity: number)
  {
    return itemCost * itemQuantity;
  }
}
