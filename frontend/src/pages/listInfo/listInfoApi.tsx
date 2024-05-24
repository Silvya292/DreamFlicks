import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const getListById = async (id: string) => {
  const response = await axios.get(`${API_URL}/list/${id}`);
  return response.data;
};

const updateList = async (id: string, listData: any) => {
  const response = await axios.patch(`${API_URL}/list/update/${id}`, listData);
  return response.data;
};

const deleteList = async (id: string) => {
  const response = await axios.delete(`${API_URL}/list/delete/${id}`);
  return response.data;
};

const makeListCollaborative = async (
  id: string,
  userName: string,
  url: string
) => {
  const response = await axios.patch(
    `${API_URL}/list/makeCollaborative/${id}`,
    { userName, url }
  );
  return response.data;
};

const getFilmById = async (id: string | undefined) => {
  const response = await axios.get(`${API_URL}/film/${id}`);
  return response.data;
};

const getSerieById = async (id: string | undefined) => {
  const response = await axios.get(`${API_URL}/tv/${id}`);
  return response.data;
};

export default {
  getListById,
  getFilmById,
  getSerieById,
  updateList,
  deleteList,
  makeListCollaborative,
};
