import { Component } from '@angular/core';
import {items} from "../../data/items";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  protected readonly items = items;
}
