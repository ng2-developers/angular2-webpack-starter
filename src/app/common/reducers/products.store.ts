export const productsReducer = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_PRODUCTS':
      return payload;
    default:
      return state;
  }
};