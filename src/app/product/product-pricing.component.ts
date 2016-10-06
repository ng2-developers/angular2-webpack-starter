import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PriceVariant } from '../common/models/pricing.model';

@Component({
  selector: 'product-pricing',
  styleUrls: ['./product-pricing.component.css'],
  templateUrl: './product-pricing.component.html'
})
export class ProductPricingComponent {
  @Input() prices: PriceVariant[];
}
