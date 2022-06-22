import { STEP1 } from "../../constants/steps";

const defaultState = STEP1;

export const stepperReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "changeStep":
      return action.payload.step;
    default:
      return state;
  }
};
