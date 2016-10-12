/* tslint:disable */
import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { ShoppingCart, LineItem, SDWANLocationInfo , LocationUpdateInfo } from '../models/cart.model';



const BASE_URL = 'http://localhost:3001/cart/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable()
export class CartService implements OnInit {
    cart: Observable<ShoppingCart>;
    constructor(
        private http: Http, public store: Store<AppStore>
    ) {
        this.cart = <Observable<ShoppingCart>>store.select('cart');
    }

    ngOnInit() {

    }

    loadItems() {
        this.http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_ITEMS', payload }))
            .subscribe(action => this.store.dispatch(action));
    }

    saveItem(item: LineItem) {
        (item.id) ? this.updateItem(item) : this.createItem(item);
    }

    createItem(item: ShoppingCart) {
/*        this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: 'CREATE_ITEM', payload }))
            .subscribe(action => this.store.dispatch(action));*/
        this.store.dispatch({ type: 'CREATE_ITEM', payload: item });            
    }

    updateItem(item: LineItem) {
        this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_ITEM', payload: item }));
    }

    deleteItem(item: LineItem) {
        this.http.delete(`${BASE_URL}${item.id}`)
            .subscribe(action => this.store.dispatch({ type: 'DELETE_ITEM', payload: item }));
    }

    addLocation(item: LineItem) {
        /* this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: 'CREATE_LOCATION', payload }))
            .subscribe(action => this.store.dispatch(action));*/
            this.store.dispatch({ type: 'CREATE_LOCATION', payload: item });
    }



}
