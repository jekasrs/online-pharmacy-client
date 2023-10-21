import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CardItemComponent} from "./product-page/card-item/card-item.component";
import {FilterComponent} from "./filter/filter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pro-pill-front';
}
