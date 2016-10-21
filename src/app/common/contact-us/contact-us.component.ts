import { Component, OnInit } from '@angular/core';
//import { ControlGroup, Control, Validators } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ContactUs } from './../models/contact-us.model';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit{
  form: FormGroup;
  firstName = new FormControl("", Validators.required);
  lastName = new FormControl("", Validators.required);
  primaryPhone = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);
  companyName = new FormControl("", Validators.maxLength(55));
  jobTitle = new FormControl("", Validators.maxLength(55));
  comments = new FormControl("", Validators.minLength(25));

  constructor(_form: FormBuilder){
        this.form = _form.group({
          "firstName": this.firstName,
          "lastName": this.lastName,
          "primaryPhone": this.primaryPhone,
          "email": this.email,
          "companyName": this.companyName,
          "jobTitle": this.jobTitle,
          "comments": this.comments
        });
  }

  ngOnInit() {

  }

  contactUs(){
    console.log("FORM VALUES: " + JSON.stringify(this.form.value));
  }
}
