import GoBackButton from '../../components/goBackButton';
import { styled } from '@mui/material/styles';
import CustomButton from '../../components/customButton';
import { useState } from 'react';
import UpdateListForm from '../../components/modals/updateListForm';

const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
});

const ButtonWrapper = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <ButtonContainer>
      <GoBackButton />
      <ButtonContainer>
        <CustomButton
          label="Compartir lista"
          styles={{
            backgroundColor: '#9febeb',
          }}
          textStyles={{
            textTransform: 'none',
          }}
          testId="shareListButton"
        />
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
        <CustomButton
          label="Eliminar lista"
          styles={{
            backgroundColor: '#e46161',
          }}
          textStyles={{
            textTransform: 'none',
          }}
          testId="deleteListButton"
        />
      </ButtonContainer>
    </ButtonContainer>
  );
};

export default ButtonWrapper;
