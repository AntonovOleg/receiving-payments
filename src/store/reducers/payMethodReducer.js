import { MODE_PAYPAL } from "../../constants/payMethods";

const defaultState = MODE_PAYPAL;

export const payMethodReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "changeCurrentPayMethod":
      return action.payload.payMethod;
    default:
      return state;
  }
};
