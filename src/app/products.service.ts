import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './model/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient,
    private notifierService: NotifierService
    ) { }

  public getProducts(): Observable<Products[]> {
    return this.http
      .get('assets/mock-data.json')
      .pipe(
        map((data: Products[]) => 
        data.map(
          (item: Products) => 
          new Products(
            item.id,
            item.description,
            item.genre,
            item.image_url,
            item.price,
            item.title
          )
          )
        )
      );
  }

  addProductToCart(product: any) { 
    let amount: any[] = [];
    amount.push(product);
    if (localStorage.getItem('cart')) {
      const temp = JSON.parse(localStorage.getItem('cart'));
      const newTemp = temp.filter(p => p.id !== product.id );
      (amount = [ ...newTemp, product]),
         localStorage.setItem('cart', JSON.stringify(amount));
    } else {
      localStorage.setItem('cart', JSON.stringify(amount));
    }

    this.notifierService.notify('Success!', 'The Item was added to the cart!');

  }

  setFilteredResults(query: any, products: any) {
    return query
      ? products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      ) : products;
  }

  numberOfPages(products: any, pageSize: any): number {
    return Math.ceil(products.length / pageSize);
  }
  
}
