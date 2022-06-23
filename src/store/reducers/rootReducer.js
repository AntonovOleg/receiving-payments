import { combineReducers } from "redux";
import { customerReducer } from "./customerReducer";
import { stepperReducer } from "./stepperReducer";
import { payMethodReducer } from "./payMethodReducer";
import { dialogReducer } from "./dialogReducer";

const rootReducer = combineReducers({
  customerReducer,
  stepperReducer,
  payMethodReducer,
  dialogReducer,
});

export default rootReducer;
