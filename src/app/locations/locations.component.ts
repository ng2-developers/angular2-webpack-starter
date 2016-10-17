import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SDWANLocationInfo, ContactInfo, EnterpriseAddress } from '../common/models/cart.model';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html'
})

export class LocationsComponent implements OnInit {
   form: FormGroup;
   sdwanLocationInfo: SDWANLocationInfo;
   contactInfo: ContactInfo;
   enterpriseAddress: EnterpriseAddress;

    constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
