import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { items } from './common/reducers/items.store';
import { selectedItem } from './common/reducers/selectedItem.store';
import { userInfo } from './common/reducers/userInfo.store';

@Injectable()
export class DataResolver implements Resolve<any> {
  constructor() {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Observable.of({ res: 'I am data'});
  }
}

// ngrx store services
export const NGRX_MODULES = [
  StoreModule.provideStore({items, selectedItem, userInfo}),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
]
// an array of services to resolve routes with data
export const APP_RESOLVER_PROVIDERS = [
  DataResolver
];
