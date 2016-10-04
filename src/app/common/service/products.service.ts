/* tslint:disable */
import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { Product } from '../models/product.model';




/* Authentication Service for
      1) Storing the current auth token (if loggedIn)
      2) Handle login and logout methods
*/

const BASE_URL = 'http://localhost:3001/products/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable()
export class ProductsService implements OnInit {
    product: Observable<Product>;
    constructor(
        private http: Http,public store: Store<AppStore>
    ) {
       this.product = <Observable<Product>> store.select('products');
    }

    ngOnInit() {
       
    }

 
    loadProduct() {
        this.http.get(BASE_URL+'/1')
        .map(res => res.json())
        .map(payload => ({ type: 'ADD_PRODUCTS', payload }))
        .subscribe(action => this.store.dispatch(action));
    }

}
