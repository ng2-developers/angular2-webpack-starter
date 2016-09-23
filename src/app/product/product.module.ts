import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { ProductDescriptionComponent }  from './product-desc.component';
import { ProductPricingComponent }      from './product-pricing.component';

@NgModule({
    imports: [ FormsModule,
    CommonModule],
    exports: [ ProductDescriptionComponent,
                ProductPricingComponent ],
    declarations: [ ProductDescriptionComponent ,
                    ProductPricingComponent ],
    providers: [],
})
export class ProductModule { }
