import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from "@angular/forms";
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { NotifierModule } from 'angular-notifier';
import { MainComponent } from './main/main.component';
import { ItemCardComponent } from './item-card/item-card.component';
// Services 


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    SearchComponent,
    HeaderComponent,
    MainComponent,
    ItemCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NotifierModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
