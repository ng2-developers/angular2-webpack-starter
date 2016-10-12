import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PriceVariant } from '../common/models/pricing.model';
import { ProductTermSelectionComponent } from '../product/product-term-selection.component'; 

@Component({
  selector: 'product-pricing',
  styleUrls: ['./product-pricing.component.css'],
  templateUrl: './product-pricing.component.html'
})
export class ProductPricingComponent {
  tmonth:string;
  @Input() prices: PriceVariant[];
  @Input() tMonth: ProductTermSelectionComponent.termMonth;
}
