import axios from "../../../utils/axios";
import { deleteExpense } from "../actions";

const deleteExpenseThunk = (id) => (dispatch) => {
  axios.delete(`/expense/delete/${id}`).then((response) => {
    dispatch(deleteExpense(response.data.id));
  });
};

export default deleteExpenseThunk;
