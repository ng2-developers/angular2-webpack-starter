import {
  inject,
  TestBed
} from '@angular/core/testing';

import { ActionReducer, Action } from '@ngrx/store';
import { Product } from '../models/product.model';
import { pricesReducer } from './prices.reducer';

describe ('The price reducer', () => {
    beforeEach(() => TestBed.configureTestingModule({

    }));

    it('price reducer -- should return current state when no valid actions have been made', ()  => {
        const state = {
       "id": 0,
        "product_id": 0,
        "urnId":"string",
        "name":"string",
        "productType":"string",
        "currency":"string",
        "productVariants": [{
            "variantId": "string",
            "productId": "string",
            "name": "string",
            "sku": "string",
                 "priceInfo":{
        "term_12":{ 
             "own" :0,
              "ctl":0
             },
        "term_24":{
                "own" :0,
              "ctl":0
              },
        "term_36":{
                "own" :0,
              "ctl":0
              }
            }
            }]
        }; 
        const actual = pricesReducer (state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('prices reducer -- should return price payload ', ()=>{
       const state = {
       "id": 0,
        "product_id": 0,
        "urnId":"string",
        "name":"string",
        "productType":"string",
        "currency":"string",
        "productVariants": [{
            "variantId": "string",
            "productId": "string",
            "name": "string",
            "sku": "string",
                 "priceInfo":{
        "term_12":{ 
             "own" :0,
              "ctl":0
             },
        "term_24":{
                "own" :0,
              "ctl":0
              },
        "term_36":{
                "own" :0,
              "ctl":0
              }
            }
            }]
        }; 
        const payload_to_send = state;
        const actual = pricesReducer (state, { type: 'ADD_PRICES', payload: payload_to_send });
        const expected = state;
        expect(actual).toBe(expected);

    });
});