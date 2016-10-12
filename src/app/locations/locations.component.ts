import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Location} from '../common/models/locations.model';


@Component({
  selector: 'locations',
  templateUrl: './locations.component.html'
})



export class LocationsComponent {
   form: FormGroup;
	 bindData: string;
	 public locations: Location[] = [];


  email = new FormControl("", Validators.required);
  firstName = new FormControl("", Validators.required);
  lastName = new FormControl("", Validators.required);
  primaryPhone = new FormControl("", Validators.required);
  locationName = new FormControl("", Validators.required);
  address = new FormControl("", Validators.required);
  street = new FormControl("", Validators.required);
  country = new FormControl("", Validators.required);
  city = new FormControl("", Validators.required);
  state = new FormControl("", Validators.required);
  zipCode = new FormControl("", Validators.required);
  shippingLocationName = new FormControl("");
  shippingAddress = new FormControl("");
  shippingStreet = new FormControl("");
  shippingCountry = new FormControl("");
  shippingCity = new FormControl("");
  shippingState = new FormControl("");
  shippingZipCode = new FormControl("");


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

  onSubmit() {
    console.log("on submit form");
    this.bindData = '<tr><td><svg class="cyclops-icon md" aria-hidden="true"><use /></svg></td><td>' + this.form.value.locationName + '</td><td>' + this.form.value.firstName + ' ' + this.form.value.lastName + '</td><td>' + this.form.value.address + ' ' + this.form.value.street + ' ' + this.form.value.country + '</td><td><svg class="cyclops-icon md" aria-hidden="true"><use  /></svg></td></tr>';
    console.log(this.form.value);
  }

  onCheckSameServiceAddress(e) {
    if (e.target.checked) {
          
            
    } else {
      
           

    }
  }
}
