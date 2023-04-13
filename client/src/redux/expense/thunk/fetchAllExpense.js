import axios from "../../../utils/axios";
import { getExpenses } from "../actions";

const fetchAllExpnese = (dispatch) => {
  axios.get("/expense/all").then((response) => {
    dispatch(getExpenses(response.data));
  });
};

export default fetchAllExpnese;
