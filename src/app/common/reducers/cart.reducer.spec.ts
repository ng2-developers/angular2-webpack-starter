import {
  inject,
  TestBed
} from '@angular/core/testing';

import { ActionReducer, Action } from '@ngrx/store';
import { CartState, ShoppingCart } from '../models/cart.model';
import { cartReducer } from './cart.reducer';

describe ('The Cart reducer', () => {
    beforeEach(() => TestBed.configureTestingModule({

    }));

    it('cart -- should return current state when no valid actions have been made', ()  => {
        
        const state = {
                "id":0,
                "state":CartState.Locations,
                "lineItems":[{
                        "id": 0,
                        "productName": "string",
                        "productId": "string",
                        "productTemplateName":"string",
                        "productTemplateId":"string",
                        "locations":[{
                            "id":0,
                            "serviceContact":{
                                    "id":0,
                                    "email":"string",
                                    "firstName":"string",
                                    "lastName":"string",
                                    "phoneNumber":"string"
                                    },
                            "serviceAddress":{
                                    "id":0,
                                    "locationName":"string",
                                    "addressLine":"string",
                                    "street":"string",
                                    "city":"string",
                                    "country":"string",
                                    "state":"string",
                                    "zipCode":"string",
                                    "checkAddress":"string"
                                    },
                                "shippingAddress":{
                                    "id":0,
                                    "locationName":"string",
                                    "addressLine":"string",
                                    "street":"string",
                                    "city":"string",
                                    "country":"string",
                                    "state":"string",
                                    "zipCode":"string",
                                    "checkAddress":"string"
                                    }
                        }]
                    }]
                };  
        const actual = cartReducer (state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });
});