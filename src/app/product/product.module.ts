import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { ProductDescriptionComponent }  from './product-desc.component';
import { ProductPricingComponent }      from './product-pricing.component';
import { CheckmarkPipe } from '../common/pipes/checkmark.pipe';

@NgModule({
    imports: [ FormsModule,
    CommonModule],
    exports: [ ProductDescriptionComponent,
                ProductPricingComponent,
                CheckmarkPipe ],
    declarations: [ ProductDescriptionComponent ,
                    ProductPricingComponent,
                    CheckmarkPipe ],
    providers: [],
})
export class ProductModule { }
