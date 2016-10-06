export const pricesReducer = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_PRICES':
      return payload;
    default:
      return state;
  }
};