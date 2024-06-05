import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const searchFilm = async (query: string | null) => {
  const response = await axios.get(`${API_URL}/film/search/${query}`);
  return response.data;
};

const searchSerie = async (query: string | null) => {
  const response = await axios.get(`${API_URL}/tv/search/${query}`);
  return response.data;
};

export default {
  searchFilm,
  searchSerie,
};
