/* tslint:disable */
import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { User } from '../models/user.model';




/* Authentication Service for
      1) Storing the current auth token (if loggedIn)
      2) Handle login and logout methods
*/

const BASE_URL = 'http://localhost:3001/user/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable()
export class AuthService implements OnInit {
    user: Observable<User>;
    constructor(
        private http: Http,public store: Store<AppStore>
    ) {
       this.user = <Observable<User>> store.select('user');
    }

    ngOnInit() {
       
    }

 
    public login(username: String, password?: String) {
        
        let user: User = {
            id: 1,
            email: username.toString()
        }

        this.http.post(`${BASE_URL}`, JSON.stringify(user), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: 'CREATE_USER', payload }))
            .subscribe(action => this.store.dispatch(action));

    }

    public logout() {

        //this.http.delete(`${BASE_URL}${user.id}`)
         //   .subscribe(action => this.store.dispatch({ type: 'DELETE_USER', payload: user }));
         this.store.dispatch({ type: 'DELETE_USER', payload: {} });
    }

    public init() {

       this.store.dispatch({ type: 'INIT_USER', payload: { id: 0, email: ''} });

    }

    public check() {
   //     return this.user.isLoggedIn;
    }


}
