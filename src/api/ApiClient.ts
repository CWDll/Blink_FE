import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.VITE_APP_SERVER_HOST,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
