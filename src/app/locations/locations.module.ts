import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { LocationsComponent }           from './locations.component';

@NgModule({
    imports: [ FormsModule,
    CommonModule],
    exports: [ LocationsComponent],
    declarations: [ LocationsComponent],
    providers: []
})
export class LocationsModule { }
