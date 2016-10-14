import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PriceTerm, Pricing, ActiveStatus , ProductVariant } from '../common/models/pricing.model';
import { ProductTermSelectionComponent } from '../product/product-term-selection.component'; 

@Component({
  selector: 'product-pricing',
  styleUrls: ['./product-pricing.component.css'],
  templateUrl: './product-pricing.component.html'
})
export class ProductPricingComponent {
  //options = ['12m', '24m', '36m'];
  //@Input() variants: [];
  //tmonth:string;
  //@Input() prices: PriceVariant[];
  //@Input() term_24m: PriceVariant[];
  //@Input() term_36m: PriceVariant[];
  //@Input() tMonth: ProductTermSelectionComponent.termMonth;
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
    this.status = {
      mode: 'own',
      sku: this.prices.productVariants[0].sku
    };
    this.getCurrentSelection();
  }

  getCurrentSelection() {
    switch (this.term) {
      case '12':
        this.currentPrice = this.prices.productVariants[0].priceInfo.term_12.own;
        break;
      case '24':
        this.currentPrice = this.prices.productVariants[0].priceInfo.term_24.own;
        break;
      case '36':
        this.currentPrice = this.prices.productVariants[0].priceInfo.term_36.own;
        break;
      default:
        this.currentPrice = this.prices.productVariants[0].priceInfo.term_12.own;
    };
  }

  onPriceSelection(mode: string, sku: string, price: number, variant: ProductVariant) {
    this.status = {
      mode: mode,
      sku: sku,
      term: this.term,
      productVariant: variant
    };
    this.currentPrice = price;
  }
}
