import axios from 'axios';

const getLists = async () => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.get(`${API_URL}/lists/getLists`);
  return response.data;
};

export default { getLists };
