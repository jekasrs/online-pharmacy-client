import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import {ItemComponent} from "./components/main-page/item/item.component";
import {FilterComponent} from "./components/filter/filter.component";
import { AccountComponent } from './components/user-page/account/account.component';
import {AccountOrderCardComponent} from "./components/user-page/account-order-card/account-order-card.component";
import { CartComponent } from './components/cart-page/cart/cart.component';
import { CartItemCardComponent } from './components/cart-page/cart-item-card/cart-item-card.component';
import { CartOrderCardComponent } from './components/cart-page/cart-order-card/cart-order-card.component';
// import {CardItemComponent} from "./components/product-page/card-item/card-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    FilterComponent,
    AccountComponent,
    AccountOrderCardComponent,
    CartComponent,
    CartItemCardComponent,
    CartOrderCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
