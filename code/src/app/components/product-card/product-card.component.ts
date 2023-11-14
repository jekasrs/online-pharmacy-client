import {Component, Input} from '@angular/core';
import {IItem} from "../../models/item";
import {items} from "../../data/items";
import {pharmacies} from "../../data/pharmacies";
import {IPharmacy} from "../../models/pharmacy";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() item: IItem
  @Input() myPharmacies: IPharmacy[]
  showPharmaciesFlag: boolean = false;

  constructor() {
    this.item = items[0]
    this.myPharmacies = pharmacies
  }

  showPharmacies() {
    this.showPharmaciesFlag = !this.showPharmaciesFlag;
  }

  addItemToCart() {
    return this.item
  }
}
