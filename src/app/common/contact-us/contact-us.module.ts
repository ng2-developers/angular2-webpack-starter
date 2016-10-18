import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
imports: [ FormsModule, ReactiveFormsModule ],
declarations: [ ContactUsComponent ],
exports: [ ContactUsComponent ]
})

export class ContactUsModule { }