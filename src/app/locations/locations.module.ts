import { NgModule }                     from '@angular/core';
import { FormsModule, ReactiveFormsModule }                  from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { LocationsComponent }           from './locations.component';
import { LocationsBatchUploadComponent } from './locations-batch-upload.component';
import { LocationsListComponent }       from './locations-list.component';

@NgModule({
    imports: [ FormsModule,
                CommonModule, 
                ReactiveFormsModule],
    exports: [ LocationsComponent,
                LocationsBatchUploadComponent,
                LocationsListComponent ],
    declarations: [ LocationsComponent,
                    LocationsBatchUploadComponent,
                    LocationsListComponent ],
    providers: []
})
export class LocationsModule { }
