import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { FilterComponent } from "./components/filter/filter.component";
import {HeaderComponent} from "./components/header/header.component";
import { CartComponent } from './components/cart-page/cart.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PharmacistPageComponent } from './components/pharmacist-page/pharmacist-page.component';
import { CartItemCardComponent } from "./components/cart-page/cart-item-card/cart-item-card.component";
import { CartOrderCardComponent } from "./components/cart-page/cart-order-card/cart-order-card.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent, ProductCardComponent, FilterComponent,
    HeaderComponent, CartComponent,
    LoginPageComponent,
    PharmacistPageComponent,
    ProductCardComponent, CartItemCardComponent, CartOrderCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

