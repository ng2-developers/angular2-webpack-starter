import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PriceTerm, PriceVariant } from '../common/models/pricing.model';
import { ProductTermSelectionComponent } from '../product/product-term-selection.component'; 

@Component({
  selector: 'product-pricing',
  styleUrls: ['./product-pricing.component.css'],
  templateUrl: './product-pricing.component.html'
})
export class ProductPricingComponent {
  options = ['12m', '24m', '36m'];
  //@Input() variants: [];
  tmonth:string;
  @Input() prices: PriceVariant[];
  //@Input() term_24m: PriceVariant[];
  //@Input() term_36m: PriceVariant[];
  //@Input() tMonth: ProductTermSelectionComponent.termMonth;
}
