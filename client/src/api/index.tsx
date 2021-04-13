import axios from "axios";

// TODO: make this read from localhost if not in deployment

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export const signIn = (formData: any) => API.post("/user/signin", formData);
export const signUp = (formData: any) => API.post("/user/signup", formData);
