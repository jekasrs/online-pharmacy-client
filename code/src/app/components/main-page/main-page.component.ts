import { Component } from '@angular/core';
import {items} from "../../data/items";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    protected readonly items = items;
}
