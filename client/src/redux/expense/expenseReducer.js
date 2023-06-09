import { ADD_EXPENSE, ALL_EXPENSES, DELETE, LOGOUT } from "./actionTypes";

const initialState = {
  expenses: [],
  message: "",
  status: "",
  from: "",
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            _id: action.payload._id,
            name: action.payload.name,
            type: action.payload.type,
            amount: action.payload.amount,
          },
        ],
      };
    case ALL_EXPENSES:
      return {
        ...state,
        expenses: [...action.payload],
      };
    case DELETE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense._id !== action.payload
        ),
      };
    case LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default expenseReducer;
