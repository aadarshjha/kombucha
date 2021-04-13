import axios from "axios";

// TODO: make this read from localhost if not in deployment
const URL = "https://enigmatic-beach-56036.herokuapp.com/"

const API = axios.create({ baseURL: URL });

export const signIn = (formData: any) => API.post("/user/signin", formData);
export const signUp = (formData: any) => API.post("/user/signup", formData);
