import axios from "axios";

const axiosMeetingDB = axios.create({

  baseURL: "http://nnbook-production.up.railway.app:8080/api/meeting",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosMeetingDB;
