import { combineReducers } from "redux";
import { customerReducer } from "./customerReducer";
import { stepperReducer } from './stepperReducer';

const rootReducer = combineReducers({ customerReducer, stepperReducer });

export default rootReducer;