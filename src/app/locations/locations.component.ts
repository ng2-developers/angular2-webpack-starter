import { Component,Input,EventEmitter,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Location} from '../common/models/locations.model';
//import {CustomValidators} from '../common/validations/validations';
import {SDWANLocationInfo,ContactInfo,EnterpriseAddress} from '../common/models/cart.model';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html'
})

export class LocationsComponent implements OnInit{
   form: FormGroup;
	 bindData[]: string;
	 //locations:Location[];
   sdwanLocationInfo:SDWANLocationInfo;
   contactInfo:ContactInfo;
   enterpriseAddress:EnterpriseAddress;



  // @Input() set item(value: Location) {
  //   this.location = Object.assign({}, value);
  // }

    constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.form = this.fb.group({
    serviceContact: this.fb.group({
      email: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      primaryPhone: new FormControl("", Validators.required)
    }),
    serviceAddress: this.fb.group({
      locationName: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      street: new FormControl("", Validators.required),
      country: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      zipCode: new FormControl("", Validators.required)
    }),
    shippingAddress: this.fb.group({
      checkAddress: new FormControl(),
      shippingLocationName: new FormControl("", Validators.required),
      shippingAddress: new FormControl("", Validators.required),
      shippingStreet: new FormControl("", Validators.required),
      shippingCountry: new FormControl("", Validators.required),
      shippingCity: new FormControl("", Validators.required),
      shippingState: new FormControl("", Validators.required),
      shippingZipCode: new FormControl("", Validators.required)
    })
  });
}

 

  
/* setUsername(id, newUsername) {
  for (var i=0; i<this.locations.length; i++) {
    if (this.locations[i].firstName !== newUsername) {
      this.locations[i].firstName = newUsername;
      return;
     }
    }
  }*/

  onSubmit() {
    this.bindData.push(this.form.value);
    console.log(this.bindData);

    //this.locations.push(this.form.value);
    //console.info(this.locations);
    //this.form.reset();
  }

  /*onUpdateName(){
    this.setUsername(1,'My Dummy data');
    this.locations.push(this.form.value);
    console.log(this.locations);
  }*/

  onCheckSameServiceAddress(e) {
    if (e.target.checked) {
   
          
    } else {
 
    }
  }

  /*onDeleteRequest(){
    console.log("on delete request");
  }*/
 

}
