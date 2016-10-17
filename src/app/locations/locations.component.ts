import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SDWANLocationInfo, ContactInfo, EnterpriseAddress, LocationInfo } from '../common/models/cart.model';

import { CartService } from '../common/service/cart.service';
import { Store, Action } from '@ngrx/store';
import { AppStore } from '../common/models/appstore.model';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html'
})

export class LocationsComponent implements OnInit {
   form: FormGroup;
   sdwanLocationInfo: SDWANLocationInfo;
   contactInfo: ContactInfo;
   enterpriseAddress: EnterpriseAddress;


constructor(public cartService: CartService,
    public store: Store<AppStore>) {


    }
  ngOnInit() {
  /*  let lineItem = {
        id: 1,
        productName: 'SDWAN',
        productId: 'SDWAN',
        productTemplateName: 'SDWAN BASIC',
        productTemplateId: 'SDWANBASIC'
      };
     this.cartService.addItem(lineItem);*/
  }

  locationSubmit($event) {
     console.log($event);
  /*  console.log($event);
    let  newLocation = {
        productTemplateId: 'SDWANBASIC',
        location: $event
      };
    this.cartService.updateLocation(<LocationInfo>newLocation);*/
  }

}
