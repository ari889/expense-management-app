import axios from "axios";
import { getExpenses } from "../actions";

const fetchAllExpnese = (id) => (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("EMA_"),
    },
  };
  axios.get(`/expense/all/${id}`, config).then((response) => {
    dispatch(getExpenses(response.data));
  });
};

export default fetchAllExpnese;
