import axios from 'axios';

const baseURL =
  typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
