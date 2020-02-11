import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from '../model/products';
import { Subscription } from 'rxjs';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  public products: Products[] = [];
  public queryFiltered: Products[] = [];
  public curPage: number;
  public pageSize: number;
  public subcribe: Subscription;





  constructor(private productsServ: ProductsService) { }

  ngOnInit() {
    this.subcribe = this.productsServ.getProducts()
      .subscribe((data: Products[]) => {
        this.queryFiltered = this.products = data;
      });
    this.curPage = 1;
    this.pageSize = 12;
  }

  getResultOfSearch(query: string) {
    this.queryFiltered = this.productsServ.setFilteredResults(query, this.products);
  }

  ngOnDestroy() {
    // unsubcribe to prevent memory leak
    this.subcribe.unsubscribe();
  }
}
