import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:5000' });

export const signIn = (formData: any) => API.post('/user/signin', formData);
export const signUp = (formData: any) => API.post('/user/signup', formData);