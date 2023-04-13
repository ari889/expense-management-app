import { combineReducers } from "redux";
import authReducer from "../auth/authReducer";
import expenseReducer from "../expense/expenseReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  expense: expenseReducer,
});

export default rootReducer;
