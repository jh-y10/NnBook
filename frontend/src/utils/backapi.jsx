import axios from "axios";

export default axios.create({
  baseURL: `https://nnbook-production.up.railway.app:8080/api`, 
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});