export const userInfo = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'CREATE_ITEM':
      return payload;
    case 'UPDATE_ITEM':
      return payload;
    default:
      return state;
  }
};
