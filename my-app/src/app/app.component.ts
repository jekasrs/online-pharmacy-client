import { Component } from '@angular/core';
import {items as data} from './data/items'
import {IItem} from "./models/item";
import {IHeader} from "./models/header";
import {FilterComponent} from "./components/filter/filter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Propill'
  items: IItem[] = data
  header: IHeader
  filter: FilterComponent
}
