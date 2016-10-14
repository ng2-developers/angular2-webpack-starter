import { Component,Input,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Location} from '../common/models/locations.model';
import {CustomValidators} from '../common/validations/validations';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html'
})

export class LocationsComponent {
   form: FormGroup;
	 bindData: string;
	 locations: Location[];

  // @Input() set item(value: Location) {
  //   this.location = Object.assign({}, value);
  // }

  email = new FormControl("", [Validators.required,CustomValidators.isValidEmail]);
  firstName = new FormControl("", [Validators.required,Validators.maxLength(32)]);
  lastName = new FormControl("", [Validators.required,Validators.maxLength(32)] );
  primaryPhone = new FormControl("", [Validators.required,Validators.maxLength(20)]);
  locationName = new FormControl("", Validators.required);
  address = new FormControl("", Validators.required);
  street = new FormControl("", Validators.required);
  country = new FormControl("", Validators.required);
  city = new FormControl("", Validators.required);
  state = new FormControl("", Validators.required);
  zipCode = new FormControl("",[Validators.required]);
  checkAddress=new FormControl("");
  shippingLocationName = new FormControl("");
  shippingAddress = new FormControl("");
  shippingStreet = new FormControl("");
  shippingCountry = new FormControl("");
  shippingCity = new FormControl("");
  shippingState = new FormControl("");
  shippingZipCode = new FormControl("",[Validators.required,Validators.maxLength(10)]);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "email": this.email,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "primaryPhone": this.primaryPhone,
      "locationName": this.locationName,
      "address": this.address,
      "street": this.street,
      "country": this.country,
      "city": this.city,
      "state": this.state,
      "zipCode": this.zipCode,
      "checkAddress": this.checkAddress,
      "shippingLocationName": this.shippingLocationName,
      "shippingAddress": this.shippingAddress,
      "shippingStreet": this.shippingStreet,
      "shippingCountry": this.shippingCountry,
      "shippingCity": this.shippingCity,
      "shippingState": this.shippingState,
      "shippingZipCode": this.shippingZipCode
    });
  }

setUsername(id, newUsername) {
  for (var i=0; i<this.locations.length; i++) {
    if (this.locations[i].firstName !== newUsername) {
      this.locations[i].firstName = newUsername;
      return;
     }
    }
  }

  onSubmit() {
    console.log("on submit form");
    this.bindData += '<tr><td><svg class="cyclops-icon md" aria-hidden="true"><use /></svg></td><td>' + this.form.value.locationName + '</td><td>' + this.form.value.firstName + ' ' + this.form.value.lastName + '</td><td>' + this.form.value.address + ' ' + this.form.value.street + ' ' + this.form.value.country + '</td><td><svg class="cyclops-icon md" aria-hidden="true"><use  /></svg></td></tr>';
    //console.log(this.form.value);
    this.locations.push(this.form.value);
    console.info(this.locations);
    this.form.reset();
  }

  onUpdateName(){
    this.setUsername(1,'My Dummy data');
    this.locations.push(this.form.value);
    console.log(this.locations);
  }

  onCheckSameServiceAddress(e) {
    if (e.target.checked) {
          
    } else {
 
    }
  }

  onDeleteRequest(){
    console.log("on delete request");
  }
 

}
