import axios from 'axios';
import { CreateListDto } from '../../../../backend/src/dto/createList.dto';

const getLists = async (userId: string) => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.get(`${API_URL}/list/getLists`, {
    params: { userId },
  });
  return response.data;
};

const getListById = async (id: number) => {
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.get(`${API_URL}/list/getListById/${id}`);
  return response.data;
};

const createList = async (list: CreateListDto) => {
  console.log(list);
  const API_URL = 'http://localhost:3000/api';
  const response = await axios.post(`${API_URL}/list/saveList`, list);
  return response.data;
};

const addCollaborativeList = async (url: any) => {
  return '';
};
export default { getLists, getListById, createList, addCollaborativeList };
