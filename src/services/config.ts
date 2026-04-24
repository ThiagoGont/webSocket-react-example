import axios from "axios";

export const MAIN_API = axios.create({
  baseURL: import.meta.env.BASE_URL,
});
