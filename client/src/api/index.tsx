import axios from "axios";

export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_URL
    : "http://localhost:5000";
const API = axios.create({ baseURL: BACKEND_URL });

export const signIn = (formData: any) => API.post("/user/signin", formData);
export const signUp = (formData: any) => API.post("/user/signup", formData);
