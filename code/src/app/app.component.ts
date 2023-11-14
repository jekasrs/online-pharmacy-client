import { Component } from '@angular/core';
import {items as itemsdata} from './data/items'
import {IItem} from "./models/item";
import {IHeader} from "./models/header";
import {IFilter} from "./models/filter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Propill'
  items: IItem[] = itemsdata
  header: IHeader
  filter: IFilter
}
