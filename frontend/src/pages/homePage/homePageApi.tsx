import axios from 'axios';

const getPopularFilms = async () => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.get(`${API_URL}/popular/getPopularFilms`);
  return response.data.slice(0, 5);
};

export default { getPopularFilms };
