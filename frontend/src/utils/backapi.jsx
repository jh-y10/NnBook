import axios from "axios";

export default axios.create({
  baseURL: `https://nnbook-production-863f.up.railway.app/api`, 
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});