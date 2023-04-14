import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("EMA_") },
});

export default axiosInstance;
