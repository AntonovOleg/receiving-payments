import { combineReducers } from "redux";
import { customerReducer } from "./customerReducer";
import { stepperReducer } from './stepperReducer';
import { payMethodReducer } from './payMethodReducer';

const rootReducer = combineReducers({ customerReducer, stepperReducer, payMethodReducer });

export default rootReducer;