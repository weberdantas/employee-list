import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
