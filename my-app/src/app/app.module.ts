import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ItemComponent} from "./components/item/item.component";
import {HeaderComponent} from "./components/header/header.component";
import {FilterComponent} from "./components/filter/filter.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HeaderComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
