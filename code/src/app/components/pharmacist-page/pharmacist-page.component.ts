import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacist-page',
  templateUrl: './pharmacist-page.component.html',
  styleUrls: ['./pharmacist-page.component.css']
})
export class PharmacistPageComponent {
  isListHidden = false;
  isSpecialisationOn = false;
  isReceipt = false;
  selectedSpecialization = "";

  specializations = ['Специализация 1', 'Специализация 2', 'Специализация 3'];

  constructor() {
    this.selectedSpecialization = this.specializations[0];
  }

  toggleList() {
    this.isListHidden = !this.isListHidden;
  }

  setSpecialisation() {
    this.isSpecialisationOn = !this.isSpecialisationOn;
  }

  setReceipt() {
    this.isReceipt = !this.isReceipt;
  }

  handleSpecializationClick(specialization: string) {
    this.selectedSpecialization = specialization;
    this.toggleList();
  }
}
