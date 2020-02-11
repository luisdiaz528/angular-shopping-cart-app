import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productSubcription : Subscription;
  public routerSubscribe: Subscription;
  public id: string;
  public product: any[] = [];
  public qty: number;

  constructor(
    private productService: ProductsService,
    private activeRouter: ActivatedRoute
    ) { }

  ngOnInit() {

    this.qty = 1;
    // get id parmas from url
    this.routerSubscribe = this.activeRouter.params.subscribe(params => {
      this.id = params.id;
    });
    // get data and filtered by id
    this.productSubcription = this.productService.getProducts().subscribe((data: any) => {
      this.product = data.filter(p => (p.id === this.id));
    });


    // this.qty = 1;
    // this.item = this.productService.getProducts();
  }

  // add item to cart

  setItem(product: any) {
    const newItem: any = {
      id: product.id,
      title: product.title,
      genre: product.genre,
      description: product.description,
      price: product.price * this.qty,
      qty: this.qty
    };

    this.productService.addProductToCart(newItem);

  }

  
  

}
