import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { FindAllComponent } from './find-all/find-all.component';
import { UpdataComponent } from './updata/updata.component';

import { CustomerService } from './customer.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreatecustomerComponent,
    FindAllComponent,
    UpdataComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
