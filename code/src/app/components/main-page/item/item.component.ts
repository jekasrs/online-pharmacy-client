import {Component, Input} from "@angular/core";
import {IItem} from "../../../models/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
  @Input() item: IItem
  title = 'ItemComponent'
  quantityIsZero = true
  quantity = 0

  increaseQuantity() {
    this.quantity++;
    this.quantityIsZero = false
  }

  decreaseQuantity() {
    if (this.quantity != 0) {
      this.quantity--;
    }
    if (this.quantity == 0)
    {
      this.quantityIsZero = true;
    }
  }

  addToCart()
  {
    this.quantity++;
    this.quantityIsZero = false;
  }
}
