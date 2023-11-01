import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {FilterComponent} from "./components/filter/filter.component";
import {HeaderComponent} from "./components/header/header.component";
import { MainPageComponent } from './components/main-page/main-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PharmacistPageComponent } from './components/pharmacist-page/pharmacist-page.component';
import {ItemComponent} from "./components/main-page/item/item.component";

@NgModule({
  declarations: [
    AppComponent, ProductCardComponent, FilterComponent,
    HeaderComponent, MainPageComponent, CartPageComponent,
    LoginPageComponent, RegistrationPageComponent, UserPageComponent,
    PharmacistPageComponent,ItemComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

