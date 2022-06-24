import { MODE_PAYPAL } from "../../constants/index";

export const payMethodReducer = (state = MODE_PAYPAL, action) => {
  switch (action.type) {
    case "changeCurrentPayMethod":
      return action.payload.payMethod;
    default:
      return state;
  }
};
