import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class UserEffects implements OnDestroy {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

  ngOnDestroy() {

  }
}
