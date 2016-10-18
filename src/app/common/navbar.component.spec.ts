import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AuthService } from '../common/service/auth.service';

import { AppState } from '../app.service';
import { NavBarComponent } from './navbar.component';


describe('Navbar', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
      providers: [
      BaseRequestOptions,
      AuthService,
      AppState,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      AppState,
      NavBarComponent
    ]
  }));


//  spyOn(console, 'log');
//    expect(!!title.http).toEqual(true);
  it('should have logo ', inject([ NavBarComponent ], (NB: NavBarComponent) => {
    spyOn(console, 'log');
    // expect(element(by.id('my-id')).isPresent()).toBe(true);
    expect(!!NB.ctlLogo).toEqual(true);
  }));
});