import { ActionReducer, Action } from '@ngrx/store';
import { ShoppingCart } from '../models/cart.model';

export const cartReducer: ActionReducer<ShoppingCart>
  = (state: any = [], action: Action) => {
    switch (action.type) {
      /*   case 'ADD_ITEMS':
           return Object.assign({}, state, {
             locations: [...state.locations, action.payload]
           });*/
      case 'CREATE_CART':
      //  if (state.lineItems === undefined) {
          return Object.assign({}, state, action.payload);
     //   }
     //   return Object.assign({}, state, {
     //     lineItems: [...state.lineItems, action.payload.lineItems]
     //   });
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
      case 'ADD_ITEM':
        /*      if (state.lineItems === undefined) {
                return Object.assign({}, state.lineItems, action.payload.location);
              }*/
        let add = true;
        state = Object.assign({}, state, {
          lineItems: (state.lineItems !== undefined) ? state.lineItems.map(lineItem => {
            if (lineItem.productTemplateId === action.payload.productTemplateId) {
              add = false;
              return Object.assign({}, lineItem, {
                locations: [...lineItem.locations, action.payload]
              }
              );
            }
            return lineItem;
          }) : Object.assign({}, state.lineItems, action.payload)
        });
        if (add) {
          if (state.lineItems === undefined) {
            return Object.assign({}, state, { lineItems: action.payload });
          }
          return Object.assign({}, state, {
            lineItems: [...state.lineItems, action.payload]
          });
        }
        return state;

      case 'UPDATE_ITEM':
        state = Object.assign({}, state, {
          lineItems: (state.lineItems !== undefined) ? state.lineItems.map(lineItem => {
           return (lineItem.productTemplateId === action.payload.productTemplateId) ?
              Object.assign({}, lineItem, action.payload) : lineItem;
          }) : state
        });
        return state;
      case 'DELETE_ITEM':
        state = Object.assign({}, state, {
          lineItems: (state.lineItems !== undefined) ?
           state.lineItems.filter(location => {
            return location.productTemplateId !== action.payload.productTemplateId;
          }) : state
        });
        return state;
      default:
        return state;
    }
  };
