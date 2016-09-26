import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../models/user.model.ts';

const initialState: User = {
    id: 0,
    email: ''
};

export const userReducer = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'CREATE_USER':
      return payload;
    case 'UPDATE_USER':
      return payload;
    case 'DELETE_USER':
      return initialState;
    case 'INIT_USER':
      return initialState;
    default:
      return state;
  }
};
