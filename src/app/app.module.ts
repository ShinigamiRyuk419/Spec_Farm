import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FlowersComponent } from './flowers/flowers.component';
import { SupportComponent } from './support/support.component';
import { ViewbasketComponent } from './viewbasket/viewbasket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllComponent } from './all/all.component';

import { HeaderComponent } from './header/header.component';
import { SuppliesComponent } from './supplies/supplies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    AboutComponent,
    FruitsComponent,
    VegetablesComponent,
    FlowersComponent,
    SupportComponent,
    ViewbasketComponent,
    CheckoutComponent,
    AllComponent,
    HeaderComponent,
    SuppliesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
