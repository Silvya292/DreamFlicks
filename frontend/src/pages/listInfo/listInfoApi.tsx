import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const getFilmById = async (id: number) => {
  const response = await axios.get(`${API_URL}/lists/getList/${id}`);
  return response.data;
};

export default { getFilmById };
