import axios from 'axios';
import { getToken } from "./auth";

const token = getToken();

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Authorization': 'Bearer ' + token }
});

export const STATIC_FOLDER = `${api.defaults.baseURL}/uploads`;

export default api;