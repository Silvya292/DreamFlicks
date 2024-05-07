import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const getListById = async (id: number) => {
  const response = await axios.get(`${API_URL}/list/${id}`);
  return response.data;
};

const updateList = async (list: any) => {
  return '';
};

const getFilmById = async (id: string | undefined) => {
  const response = await axios.get(`${API_URL}/film/${id}`);
  return response.data;
};

const getSerieById = async (id: string | undefined) => {
  const response = await axios.get(`${API_URL}/tv/${id}`);
  return response.data;
};

export default { getListById, getFilmById, getSerieById, updateList };
