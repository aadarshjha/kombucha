import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://enigmatic-beach-56036.herokuapp.com/"
    : "http://localhost:5000";

const API = axios.create({ baseURL: URL });

export const signIn = (formData: any) => API.post("/user/signin", formData);
export const signUp = (formData: any) => API.post("/user/signup", formData);
