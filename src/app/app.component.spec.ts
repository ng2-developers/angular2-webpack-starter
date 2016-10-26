import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppState,
      AppComponent
    ]}));

  it('should have a url', inject([ AppComponent ], (app: AppComponent) => {
    expect(app.angularclassLogo).toEqual('assets/img/angularclass-avatar.png');
  }));

  it('should have a CenturyLink nav bar', inject([ AppComponent ], (app: AppComponent) => {
    expect(app.ctlNavBar).toEqual('<ctl-nav-bar></ctl-nav-bar>');
  }));

});
