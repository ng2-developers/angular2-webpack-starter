import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../common/models/appstore.model';
import { Product } from '../common/models/product.model';
import { PriceVariant } from '../common/models/pricing.model';
import { Alert } from '../common/models/alert.model';
import { ProductsService } from '../common/service/products.service';
import { PricingService } from '../common/service/pricing.service';



@Component({
  selector: 'product-details',
  styleUrls: ['./product-details.component.css'],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
  product: Observable<Product>;
  prices: Observable<Array<PriceVariant>>;
  title: String;
  loading: boolean;
  error: boolean;
  errorAlert: Alert;

  constructor(public prodService: ProductsService,
    public pricingService: PricingService,
    public store: Store<AppStore>) {
    this.product = prodService.product;
    this.prices = pricingService.pricing;
    this.errorAlert = null;
    this.loading = false;
    this.error = false;
    this.loadProduct();
    this.loadPricing();
    this.title = 'Description';
    // this.products.subscribe(v => console.log(v));
  }

  private loadProduct() {
    this.loading = true;
    this.error = false;
    this.errorAlert = null;
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
        this.error = true;
      },
      () => this.loading = false);

  }

  private loadPricing() {
    this.loading = true;
    this.error = false;
    this.errorAlert = null;
    this.pricingService.loadPrices('12')
      .map( res => {
              //    console.log(res);
                  return res;
                })
      .map(payload => ({ type: 'ADD_PRICES', payload }))
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
        this.error = true;
      },
      () => this.loading = false);

  }
}
