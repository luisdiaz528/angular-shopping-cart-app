import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Products } from '../model/products';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  public qty: number;
  public product: any[] = []; 
  @Input() item: [] = [];

  constructor(
    private cartService: CartService) { }

  ngOnInit() {
    this.qty = 0;
  }

  addItemToCart(product: Products) {
    if (this.qty <= 0) {
      return;
    } else {
      const newObject: any = {
        id: product.id,
        title: product.title,
        genre: product.genre,
        description: product.description,
      };
      newObject.price = (this.qty === 0 ) ? product.price : Number(product.price) * this.qty;
      newObject.qty = (this.qty === 0) ? 1 : this.qty++;

      if (this.qty === 0) {
        this.qty = 1;
      }
      
      this.cartService.addItemTocart(newObject);
    }
  }

}
