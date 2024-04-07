import axios from 'axios';

const API_URL = 'http://localhost:3000/api';
const getSerieById = async (id: string | undefined) => {
  const response = await axios.get(`${API_URL}/tv/${id}`);
  return response.data;
};

export default { getSerieById };
