import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../common/models/appstore.model';

@Component({
  selector: 'product-term-selection',
  templateUrl: './product-term-selection.component.html'
})
export class ProductTermSelectionComponent {
  public termMonth:string;
  
  getMonth(params) {
    console.log(params.srcElement.innerHTML);  
    this.termMonth = params.srcElement.innerHTML;
  }

}
