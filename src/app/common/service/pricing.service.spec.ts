/* tslint:disable */
import { Injectable, OnInit } from '@angular/core';
import { Http,   BaseRequestOptions,ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { inject, TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { PricingService } from '../service/pricing.service';

import { Component } from '@angular/core';
import { MockBackend } from '@angular/http/testing';


describe('PricingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      Store,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      PricingService
    ]}));



/* describe('PricingService:Pricing', () => {
let service;
beforeEach( TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [ BaseRequestOptions]
      },
      PricingService
    ]}));
*/ 


/* it('should get data from the server', inject([ PricingService ], (PS: PricingService) => {
    spyOn(console, 'log');
    let jsonString = PS.loadPrices();
    console.log("xxxx " + jsonString);
    //expect(jsonString.toContain('1');
    //expect(jsonString.productVariants.sku).toEqual('SDWANBASIC');
  })); */

/* it('should return json values', inject([ PricingService ], (PS: PricingService) => {
    let jsonString = PS.loadPrices();
    expect(jsonString.id).toContain('1');
    expect(jsonString.productVariants.sku).toEqual('SDWANBASIC');
}); */
})


