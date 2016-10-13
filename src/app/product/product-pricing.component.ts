import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pricing , ActiveStatus } from '../common/models/pricing.model';

@Component({
  selector: 'product-pricing',
  styleUrls: ['./product-pricing.component.css'],
  templateUrl: './product-pricing.component.html'
})
export class ProductPricingComponent {
  @Input() prices: Pricing;
  @Input() term: string;
  @Input() status: ActiveStatus;
  transport: string;
  currentPrice: number;
  activeIndex: string;
 // status: ActiveStatus;
  options = ['Product Option', 'With My Own Transport', 'With CenturyLink Transport'];

  onTermClick(term: string) {
    this.term = term;
    console.log(term);
  }

  constructor() {

  }

  onPriceSelection(mode: string, sku: string, price: number) {
    this.status = {
      mode: mode,
      sku: sku
    };
    this.currentPrice = price;
  }
}
