import GoBackButton from '../../components/goBackButton';
import { styled } from '@mui/material/styles';
import CustomButton from '../../components/customButton';
import { useState } from 'react';
import UpdateListForm from '../../components/modals/updateListForm';
import ShareListButton from '../../components/shareListButton';
import api from './listInfoApi';

const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
});

export interface ListDetailsProps {
  id: string;
  owner: string;
  userId: string;
}

const ButtonWrapper = ({ id, owner, userId }: ListDetailsProps) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  const handleDeleteList = () => {
    api
      .deleteList(id)
      .then(() => {
        console.log('Lista eliminada con éxito');
        window.history.pushState(null, '', '/user/id/list');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error al eliminar la lista:', error);
      });
  };

  return (
    <ButtonContainer>
      <GoBackButton />
      <ButtonContainer>
        <ShareListButton />
        <CustomButton
          label="Editar lista"
          styles={{
            backgroundColor: '#f1b963',
          }}
          textStyles={{
            textTransform: 'none',
          }}
          testId="editListButton"
          onClick={openDialog}
        />
        <UpdateListForm open={open} onClose={setOpen} />
        {owner === userId && (
          <CustomButton
            label="Eliminar lista"
            styles={{
              backgroundColor: '#e46161',
            }}
            textStyles={{
              textTransform: 'none',
            }}
            testId="deleteListButton"
            onClick={handleDeleteList}
          />
        )}
      </ButtonContainer>
    </ButtonContainer>
  );
};

export default ButtonWrapper;
