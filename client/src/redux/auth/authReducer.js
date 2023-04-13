import { SETAUTH } from "./actionTypes";

const initialState = {
  user: {},
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETAUTH:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
