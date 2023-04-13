import { SETAUTH } from "./actionTypes";

export const setAuth = (data) => {
  return {
    type: SETAUTH,
    payload: data,
  };
};
