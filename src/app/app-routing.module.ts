import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FlowersComponent } from './flowers/flowers.component';
import { SupportComponent } from './support/support.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ViewbasketComponent } from './viewbasket/viewbasket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllComponent } from './all/all.component';
// import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'fruits-component', component: FruitsComponent },
  { path: 'vegetables-component', component: VegetablesComponent },
  { path: 'flowers-component', component: FlowersComponent },
  { path: 'support-component', component: SupportComponent },
  { path: 'login-form-component', component: LoginFormComponent },
  { path: 'viewbasket-component', component: ViewbasketComponent },
  { path: 'checkout-component', component: CheckoutComponent },
  { path: 'all-component', component: AllComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
