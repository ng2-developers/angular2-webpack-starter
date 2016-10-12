import { ActionReducer, Action } from '@ngrx/store';
import { ShoppingCart } from '../models/cart.model';

export const cartReducer: ActionReducer<ShoppingCart>
  = (state: any = [], action: Action) => {
    switch (action.type) {
      /*   case 'ADD_ITEMS':
           return Object.assign({}, state, {
             productDetails: [...state.productDetails, action.payload]
           });*/
      case 'CREATE_ITEM':
        if (state.lineItems === undefined) {
          return Object.assign({}, state.lineItems, action.payload);
        }
        return Object.assign({}, state, {
          lineItems: [...state.lineItems, action.payload.lineItems]
        });
      /*     case 'UPDATE_ITEM':
             return state.lineItems.map(item => {
               return item.id === action.payload.id ? 
                Object.assign({}, item, action.payload) : item;
             });
           case 'DELETE_ITEM':
             return state.lineItems.filter(item => {
               return item.id !== action.payload.id;
             });
           case 'ADD_LOCATIONS':
             return state.lineItems.map(item => {
               return item.id === action.payload.id ? Object.assign({},
                 item.lineItems, [...item.lineItems, action.payload]) : item;
             });*/
      case 'CREATE_LOCATION':
        if (state.lineItems === undefined) {
          state = Object.assign({}, state.lineItems, action.payload.location);
        }
        state.lineItems.map(lineItem => {
          if (lineItem.productTemplateId === action.payload.productTemplateId) {
            console.log('Matched' + lineItem.productTemplateId);
            console.log(state.lineItems);
            console.log(action.payload);
            state = Object.assign({}, state, {
              lineItems: [...state.lineItems, Object.assign({}, lineItem, {
                productDetails: action.payload.location
              }
              )]
            }
            );
          }
        });
        console.log(state);
        return state;
      /*     case 'UPDATE_LOCATION':
             return state.lineItems.map(item => {
               item.lineItems.map(location => {
                 return location.id === action.payload.id ?
                   Object.assign({}, location, action.payload) : item;
               });
             });
           case 'DELETE_LOCATION':
             return state.lineItems.map(item => {
               item.lineItems.filter(location => {
                 return location.id !== action.payload.id;
               });
             });*/
      default:
        return state;
    }
  };
