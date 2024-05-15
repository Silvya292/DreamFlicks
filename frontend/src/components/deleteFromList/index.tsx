import CustomButton from '../customButton';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const deleteItemFromList = async (listId: string, itemId: any) => {
  const response = await axios.patch(`${API_URL}/list/deleteItem/${listId}`, {
    id: itemId,
  });
  return response.data;
};

interface Props {
  data: {
    listId: string;
    itemId: number;
  };
}

const DeleteFromList = ({ data }: Props) => {
  const handleClick = async () => {
    await deleteItemFromList(data.listId, data.itemId);
    const url = '/user/id/list/' + data.listId;
    window.history.pushState(null, '', url);
    window.location.reload();
  };

  return (
    <CustomButton
      label="Eliminar de la lista"
      styles={{
        backgroundColor: '#e46161',
      }}
      textStyles={{ textTransform: 'none', fontWeight: 'bold' }}
      testId="deleteFromListButton"
      onClick={handleClick}
    ></CustomButton>
  );
};

export default DeleteFromList;
