import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../model/products';
import { CartService } from '../cart.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productSubcription: Subscription;
  public routerSubscribe: Subscription;
  public id: string;
  public product: any[] = [];
  public qty: number;

  constructor(
    private productService: ProductsService,
    private activeRouter: ActivatedRoute,
    private cartServ: CartService,
    private notifierService: NotifierService) { }

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

  }

  // add item to cart
  addItemToCart(product: Products) {
    if (this.qty <= 0) {
      return;
    } else {
      const newObject: any = {
        id: product.id,
        title: product.title,
        gerne: product.genre,
        description: product.description,
      };
      newObject.price = (this.qty === 0) ? product.price : Number(product.price) * this.qty;
      newObject.qty = (this.qty === 0) ? 1 : this.qty;

      if (this.qty === 0) {
        this.qty = 1;
      }

      this.cartServ.addItemTocart(newObject);
      this.notifierService.notify('success', 'The item was successfully added to your cart!');
    }

  }
}
