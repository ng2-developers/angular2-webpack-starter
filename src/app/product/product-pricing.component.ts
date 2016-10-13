import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pricing } from '../common/models/pricing.model';

@Component({
  selector: 'product-pricing',
  styleUrls: ['./product-pricing.component.css'],
  templateUrl: './product-pricing.component.html'
})
export class ProductPricingComponent {
  @Input() prices: Pricing;
  @Input() term: string;
  transport: string;
  currentPrice: number;
  activeIndex: string;
  options = ['Product Option', 'With My Own Transport', 'With CenturyLink Transport'];

  onTermClick(term: string) {
    this.term = term;
    console.log(term);
  }

  onPriceSelection(n: string) {
    this.activeIndex = n;
  }
}
