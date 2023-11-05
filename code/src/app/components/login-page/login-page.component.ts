import {Component, Input} from '@angular/core';
import {IItem} from "../../models/item";
import {IPharmacy} from "../../models/pharmacy";
import {items} from "../../data/items";
import {pharmacies} from "../../data/pharmacies";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
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

}
