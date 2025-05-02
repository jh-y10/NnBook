import axios from "axios";

const axiosDB = axios.create({
  baseURL: "http://localhost:5050/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosDB;
