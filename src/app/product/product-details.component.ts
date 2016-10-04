import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../common/models/appstore.model';
import { Product } from '../common/models/product.model';
import { ProductsService } from '../common/service/products.service';

@Component({
  selector: 'product-details',
  styleUrls: [ './product-details.css' ],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
   product: Observable<Product>;
   title: String;

   constructor(public prodService: ProductsService,
              public store: Store<AppStore>) {
      this.product = prodService.product;
      prodService.loadProduct();
      this.title = 'Description';
     // this.products.subscribe(v => console.log(v));
  }

}
