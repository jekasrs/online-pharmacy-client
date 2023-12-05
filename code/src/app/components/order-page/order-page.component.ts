import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {pharmacies} from "../../data/pharmacies";
import {IPharmacy} from "../../models/pharmacy";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})

export class OrderPageComponent {
  @Input() myPharmacies: IPharmacy[];
  pharmacy: IPharmacy;
  isValidName: boolean = true;
  isValidPhone: boolean = true;
  noProductsMessage: boolean;
  phoneErrorMessage: string;
  nameErrorMessage: string;
  name: string;
  phone: string;
  Chosen: boolean = true;
  showPharmaciesFlag: boolean = false;
  selectedSpecialization: any;
  specialization: any;
  selectedPharmaName: string = "";
  totalPrice: number = 0.00;
  devPrice: number = 0.00;

  constructor(private router: Router) {
    this.myPharmacies = pharmacies;
  }

  showPharmacies() {
  }

  confirmOrder(){
  }

  refresh() {
  }

  calculatePrice() {
    return 0.00;
  }

  createOrder() {

  }

  toggleList() {

  }

  handleApothekeClick(pharmacy: string) {

  }

}
