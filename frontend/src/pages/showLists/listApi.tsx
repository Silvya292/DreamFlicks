import axios from 'axios';
import { CreateListDto } from '../../../../backend/src/dto/createList.dto';

const getLists = async (userId: string) => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.get(`${API_URL}/list/getLists`, {
    params: { userId },
  });
  return response.data;
};

const getListById = async (id: string) => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.get(`${API_URL}/list/getListById/${id}`);
  return response.data;
};

const createList = async (list: CreateListDto, userName: string) => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.post(`${API_URL}/list/saveList`, list, {
    params: { userName },
  });
  return response.data;
};

const addCollaborativeList = async (url: string, userId: string) => {
  const id = url.split('/')[2];
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.patch(`${API_URL}/list/addCollaborative/${id}`, {
    userId,
  });
  return response.data;
};
export default { getLists, getListById, createList, addCollaborativeList };
