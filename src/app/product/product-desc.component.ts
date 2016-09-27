import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../common/models/appstore.model';
import { Product } from '../common/models/product.model';
import { ProductsService } from '../common/service/products.service';

@Component({
  selector: 'product-description',
  styleUrls: [ './product-desc.css' ],
  templateUrl: './product-desc.template.html'
})
export class ProductDescriptionComponent {
   products: Observable<Array<Product>>;

   constructor(public prodService: ProductsService,
              public store: Store<AppStore>) {
      this.products = prodService.products;
      prodService.loadProducts();
     // this.products.subscribe(v => console.log(v));
  }

}
