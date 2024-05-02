import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const getPopularFilms = async () => {
  const response = await axios.get(`${API_URL}/film/popular`);
  return response.data.slice(0, 5);
};

const getPopularTV = async () => {
  const response = await axios.get(`${API_URL}/tv/popular`);
  return response.data.slice(0, 5);
};

export default { getPopularFilms, getPopularTV };
