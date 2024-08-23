import axios from 'axios';
export const PORT = process.env.PORT || 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}/api`, 
});

export default api;