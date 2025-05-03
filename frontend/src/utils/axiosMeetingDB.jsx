import axios from "axios";

const axiosMeetingDB = axios.create({
  baseURL: "http://localhost:5050/api/meeting",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosMeetingDB;
