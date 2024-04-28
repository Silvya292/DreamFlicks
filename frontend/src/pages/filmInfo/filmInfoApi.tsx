import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const getFilmById = async (id: number) => {
  const response = await axios.get(`${API_URL}/film/${id}`);
  return response.data;
};

export default { getFilmById };
