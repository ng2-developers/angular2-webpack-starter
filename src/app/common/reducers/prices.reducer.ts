import { ActionReducer, Action } from '@ngrx/store';
import { PriceTerm, PriceVariant } from '../models/pricing.model';

export const pricesReducer: ActionReducer<Array<PriceTerm>>
              = (state: any = [], action: Action) => {
  switch (action.type) {
    case 'ADD_PRICES':
      return action.payload;
    default:
      return state;
  }
};
