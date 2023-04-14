import { ADD_EXPENSE, ALL_EXPENSES, DELETE, LOGOUT } from "./actionTypes";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    payload: data,
  };
};

export const getExpenses = (data) => {
  return {
    type: ALL_EXPENSES,
    payload: data,
  };
};

export const deleteExpense = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const expenseLogout = () => {
  return {
    type: LOGOUT,
  };
};
