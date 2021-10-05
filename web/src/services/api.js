import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const STATIC_FOLDER = `${api.defaults.baseURL}/uploads`;

export default api;