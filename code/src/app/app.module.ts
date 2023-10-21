import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {CardItemComponent} from "./product-page/card-item/card-item.component";
import {FilterComponent} from "./filter/filter.component";
import {HeaderComponent} from "./header/header.component";
import { MainPageComponent } from './main-page/main-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PharmacistPageComponent } from './pharmacist-page/pharmacist-page.component';

@NgModule({
  declarations: [
    AppComponent, CardItemComponent, FilterComponent,
    HeaderComponent, MainPageComponent, CartPageComponent,
    LoginPageComponent, RegistrationPageComponent, UserPageComponent,
    PharmacistPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
