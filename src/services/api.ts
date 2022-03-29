import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL?.toString();

const api = axios.create({
  baseURL: API_URL || "http://10.0.0.110:5000/",
});

export { api };
