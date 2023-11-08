import {Component, Input} from '@angular/core';
import {items} from "../../data/items";
import {orders} from "../../data/orders";
import {IOrder} from "../../models/order";
import {IItem} from "../../models/item";
import {IItemQuantuty} from "../../models/item_quantity";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() order: IOrder
  // protected readonly items = items;
  // items: IItemQuantuty[];

  // предполагается, что items будет инициализироваться
  // по соответствующему order
  // protected readonly items = items;

  // constructor() {
  //   this.items = this.order.items;
  //   for (let i = 0; i < this.order.items.length; i++)
  //   {
  //     this.items[i] = items[this.order.items[0].itemId]
  //     // находим в бд соответствующий item по его id
  //     // нужно будет модифицировать для случая,
  //     // когда порядок item в бд не соответствует его id
  //   }
  // }
}
