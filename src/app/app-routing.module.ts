import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductsComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/main'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
