import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { FilterComponent } from "./components/filter/filter.component";
import {HeaderComponent} from "./components/header/header.component";
import { MainPageComponent } from './components/main-page/main-page.component';
import { CartComponent } from './components/cart-page/cart.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PharmacistPageComponent } from './components/pharmacist-page/pharmacist-page.component';
import { ItemComponent } from "./components/main-page/item/item.component";
import { CartItemCardComponent } from "./components/cart-page/cart-item-card/cart-item-card.component";
import { CartOrderCardComponent } from "./components/cart-page/cart-order-card/cart-order-card.component";
import {AccountComponent} from "./components/user-page/account/account.component";
import {AccountOrderCardComponent} from "./components/user-page/account-order-card/account-order-card.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent, ProductCardComponent, FilterComponent,
    HeaderComponent, MainPageComponent, CartComponent,
    LoginPageComponent, RegistrationPageComponent, UserPageComponent,
    PharmacistPageComponent,ItemComponent,
    ProductCardComponent, CartItemCardComponent, CartOrderCardComponent, AccountComponent, AccountOrderCardComponent
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

