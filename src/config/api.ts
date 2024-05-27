import axios from "axios";
const OPEN_AI_API_KEY = import.meta.env.VITE_OPEN_AI_KEY;

const api = axios.create({
  baseURL: `https://openrouter.ai/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPEN_AI_API_KEY}`,
  },
});

export default api;
