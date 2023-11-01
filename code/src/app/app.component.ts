import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {FilterComponent} from "./components/filter/filter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pro-pill-front';
}
