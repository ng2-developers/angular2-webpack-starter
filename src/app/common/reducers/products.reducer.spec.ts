import {
  inject,
  TestBed
} from '@angular/core/testing';

import { ActionReducer, Action } from '@ngrx/store';
import { Product } from '../models/product.model';
import { productsReducer } from './products.reducer';

describe ('The products reducer', () => {
    beforeEach(() => TestBed.configureTestingModule({

    }));

    it('products reducer -- should return current state when no valid actions have been made', ()  => {
        const state = {
        id: 0,
        "urnid": "string",
        "name": "string",
        "description": "string",
        "product_type": "string",
        "created_at": "string",
        "updated_at": "string",
        "display_scope": [],
        "variants": [{
            id: 0,
            "product_id": 0,
            "name": "string",
            "sku": "string",
            "created_at": "string",
            "updated_at": "string",
            "display_position": 0,
            "service_plan": "string",
            "service_vendor": "string",
            "service_transport": "string",
            "security_pkg": "string",
            "standard_cpe": "string",
            "ha_service_plan": "string",
            "ha_service_vendor": "string",
            "ha_service_transport": "string",
            "ha_security_pkg": "string",
            "ha_cpe": "string",
            "tier1_support": "string"
            }]
        }; 
        const actual = productsReducer (state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('products reducer -- should return product payload when we sent add product', ()=>{
      const state = {
        id: 1,
        "urnid": "SD-WAN",
        "name": "string",
        "description": "string",
        "product_type": "string",
        "created_at": "string",
        "updated_at": "string",
        "display_scope": [],
        "variants": [{
            id: 0,
            "product_id": 0,
            "name": "string",
            "sku": "string",
            "created_at": "string",
            "updated_at": "string",
            "display_position": 0,
            "service_plan": "string",
            "service_vendor": "string",
            "service_transport": "string",
            "security_pkg": "string",
            "standard_cpe": "string",
            "ha_service_plan": "string",
            "ha_service_vendor": "string",
            "ha_service_transport": "string",
            "ha_security_pkg": "string",
            "ha_cpe": "string",
            "tier1_support": "string"
            }]
        }; 
        const payload_to_send = state;
        const actual = productsReducer (state, { type: 'ADD_PRODUCTS', payload: payload_to_send });
        const expected = state;
        expect(actual).toBe(expected);

    });
});