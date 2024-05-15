import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { Dispatch, FormEvent, SetStateAction, useCallback } from 'react';
import CustomButton from '../customButton';
import { styled } from '@mui/material/styles';
import api from '../../pages/showLists/listApi';

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    width: '32%',
    padding: '0.8%',
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  color: '#000000',
  justifyContent: 'center',
  display: 'flex',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '1.5rem',
});

const StyledDialogContentText = styled(DialogContentText)({
  marginBottom: '1em',
  textAlign: 'center',
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'center',
  display: 'flex',
});

type CollaborativeListFormProps = {
  userId: string;
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

const AddItemToListForm = ({
  userId,
  open,
  onClose,
}: CollaborativeListFormProps) => {
  const closeDialog = () => {
    onClose(false);
  };

  const formTitle = 'Añadir a una lista';
  const formDescription =
    'No te pierdas nada y selecciona la lista en la que quieres añadir este contenido';

  return (
    <StyledDialog
      data-testId={'addItemListForm'}
      open={open}
      onClose={closeDialog}
      PaperProps={{
        component: 'form',
        onSubmit: async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form = event.currentTarget;
          closeDialog();
        },
      }}
    >
      <StyledDialogTitle data-testId={'listTitle'}>
        {formTitle}
      </StyledDialogTitle>
      <DialogContent>
        <StyledDialogContentText data-testId={'listDescription'}>
          {formDescription}
        </StyledDialogContentText>
        <Stack spacing={3.5}>
          <TextField
            required
            id="standard-required"
            name={'url'}
            type={'text'}
            label="URL de la lista"
            variant="standard"
          />
        </Stack>
      </DialogContent>
      <StyledDialogActions>
        <CustomButton
          label="Añadir"
          styles={{
            backgroundColor: '#f1b963',
            width: '30%',
          }}
          textStyles={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
          testId="addCollaborativeListButton"
          type="submit"
        ></CustomButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default AddItemToListForm;
