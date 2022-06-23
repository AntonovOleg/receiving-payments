export const customerReducer = (state = [], action) => {
  switch (action.type) {
    case "AddCustomer":
      return [...state, action.payload];
    case "EditCustomer":
      return state.map((curr) => {
        if (curr.id !== action.payload.id) return curr;
        curr = action.payload;
        return curr;
      });
    case "DeleteCustomer":
      return state.filter((curr) => curr.id !== action.payload.id);
    default:
      return state;
  }
};
