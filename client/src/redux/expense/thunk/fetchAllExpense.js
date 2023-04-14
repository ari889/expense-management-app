import axios from "axios";
import { getExpenses } from "../actions";

const fetchAllExpnese = (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("EMA_"),
    },
  };
  axios.get("/expense/all", config).then((response) => {
    dispatch(getExpenses(response.data));
  });
};

export default fetchAllExpnese;
