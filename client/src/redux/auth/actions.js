import { LOGOUT, SETAUTH } from "./actionTypes";

export const setAuth = (data) => {
  return {
    type: SETAUTH,
    payload: data,
  };
};
export const authLogout = () => {
  return {
    type: LOGOUT,
  };
};
