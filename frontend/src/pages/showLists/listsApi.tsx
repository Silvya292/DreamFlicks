import axios from 'axios';

const getLists = async () => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.get(`${API_URL}/lists/getLists`);
  return response.data;
};

const createList = async (list: any) => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.post(`${API_URL}/lists/createList`, list);
  return response.data;
};
export default { getLists, createList };
