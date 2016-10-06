import { ActionReducer, Action } from '@ngrx/store';
import { PriceVariant } from '../models/pricing.model';

export const pricesReducer: ActionReducer<Array<PriceVariant>>
              = (state: any = [], action: Action) => {
  switch (action.type) {
    case 'ADD_PRICES':
      return action.payload;
    default:
      return state;
  }
};
