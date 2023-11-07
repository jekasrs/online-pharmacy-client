import { Component } from '@angular/core';
import {items} from "../../data/items";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    protected readonly items = items;
}

