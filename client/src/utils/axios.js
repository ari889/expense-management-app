import axios from "axios";

const axiosInstance = axios.create({
  headers: { Authorization: "Bearer " + localStorage.getItem("EMA_") },
});

export default axiosInstance;
