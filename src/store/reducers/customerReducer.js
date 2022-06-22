// structure of state = [{
//   id
//   name: '',
//   address: '',
//   paymentMethod: '',
//   cardNumber: '',
//   cardExpire: '',
//   cardCVV: ''
// }]

const defaultState = [];

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "AddCustomer":
      return [...state, action.payload];
    case "EditCustomer":
      return state.map((curr) => {
        if (curr.id !== action.payload.id) return curr;
        curr.name = action.payload.name;
        curr.address = action.payload.address;
        curr.paymentMethod = action.payload.paymentMethod;
        curr.cardNumber = action.payload.cardNumber;
        curr.cardExpire = action.payload.cardExpire;
        curr.cardCVV = action.payload.cardCVV;
        return curr;
      });
    case "DeleteCustomer":
      return state.filter((curr) => curr.id !== action.payload.id);
    default:
      return state;
  }
};
