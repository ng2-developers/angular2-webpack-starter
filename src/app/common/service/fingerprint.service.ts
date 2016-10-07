import { Injectable, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';

// Fingerprintjs2
import * as Fingerprint from 'fingerprintjs2';

@Injectable()
export class FingerPrintService implements OnInit {
    constructor( public store: Store<AppStore>) {

    }

    ngOnInit() {

    } 
    public getFingerPrint(){
        let fingerprint = new Fingerprint();
        let self = this;
        fingerprint.get(function(result){
           self.store.dispatch({ type: 'ADD_FINGERPRINT', payload: { fingerPrint: result} });
        });
    }

}
