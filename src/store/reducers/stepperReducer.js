import { STEP1 } from "../../constants/index";

export const stepperReducer = (state = STEP1, action) => {
  switch (action.type) {
    case "changeStep":
      return action.payload.step;
    default:
      return state;
  }
};
