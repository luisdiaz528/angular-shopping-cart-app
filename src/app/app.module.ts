import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { AddNewDvdComponent } from './header/add-new-dvd/add-new-dvd.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

// Services 
import { ProductsService } from './products.service';
import { CartService } from './cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    SearchComponent,
    HeaderComponent,
    MainComponent,
    ItemCardComponent,
    AddNewDvdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ],
  entryComponents: [AddNewDvdComponent],
  exports: [AddNewDvdComponent],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
