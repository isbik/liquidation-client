import axios from "axios";
import { toast } from "react-toastify";

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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 500) {
      toast.error("Произошла ошибка на сервере, обратитесь к администратору");
    }

    throw error;
  }
);

export { api };
