import axios from "axios";

const BASE_URL = "http://localhost:4200";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

api.defaults.withCredentials = true;

export { api };
