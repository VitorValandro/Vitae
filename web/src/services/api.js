import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vitae-restapi.herokuapp.com/',
});

export const STATIC_FOLDER = `${api.defaults.baseURL}/uploads`;

export default api;