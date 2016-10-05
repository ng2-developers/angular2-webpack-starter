import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../common/models/appstore.model';
import { Product } from '../common/models/product.model';
import { Alert } from '../common/models/alert.model';
import { ProductsService } from '../common/service/products.service';



@Component({
  selector: 'product-details',
  styleUrls: ['./product-details.css'],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
  product: Observable<Product>;
  title: String;
  loading: boolean;
  errorAlert: Alert;

  constructor(public prodService: ProductsService,
    public store: Store<AppStore>) {
    this.product = prodService.product;
    this.errorAlert = undefined;
    this.loading = false;
    this.loadProduct();
    this.title = 'Description';
    // this.products.subscribe(v => console.log(v));
  }

  private loadProduct() {
    this.loading = true;
    this.errorAlert = undefined;
    this.prodService.loadProduct()
      .map(payload => ({ type: 'ADD_PRODUCTS', payload }))
      .subscribe(
      action => {
        this.store.dispatch(action);
        this.loading = false;
      },
      error => {
        this.errorAlert = <Alert>{
          type: 'error',
          header: 'Warning!',
          message: <any>error
        };
        this.loading = false;
      },
      () => this.loading = false);

  }
}
