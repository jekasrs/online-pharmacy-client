import {MainPageComponent} from "../components/main-page/main-page.component";
import {LoginPageComponent} from "../components/login-page/login-page.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductCardComponent} from "../components/product-card/product-card.component";
import {PharmacistPageComponent} from "../components/pharmacist-page/pharmacist-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'product-page', component: ProductCardComponent },
  { path: 'pharmacist', component: PharmacistPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
