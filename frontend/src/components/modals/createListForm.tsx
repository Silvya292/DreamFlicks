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
    width: '30%',
    padding: '0.6%',
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
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'center',
  display: 'flex',
});

type CreateListFormProps = {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

interface CreateListValues {
  listId: number;
  owner: string;
  title: string;
  description?: string;
  image?: string;
  items?: string[];
}

const CreateListForm = ({ open, onClose }: CreateListFormProps) => {
  const closeDialog = () => {
    onClose(false);
  };

  const createList = useCallback(async (list: CreateListValues) => {
    const listValues: CreateListValues = {
      listId: list.listId || 1,
      owner: list.owner || 'admin',
      title: list.title || '',
      description: list.description || '',
      image: list.image || '',
      items: list.items || [],
    };
    await api.createList(listValues);
  }, []);

  const formTitle = 'Crear nueva lista';
  const formDescription =
    'Comienza a organizar tu contenido favorito e introduce los detalles de tu nueva lista.';

  return (
    <StyledDialog
      data-testId={'createListForm'}
      open={open}
      onClose={closeDialog}
      PaperProps={{
        component: 'form',
        onSubmit: async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form = event.currentTarget;
          const listTitle = form['listTitle'].value;
          const listDescription = form['listDescription'].value;
          const listImage = form['listImage'].value;
          await createList({
            listId: 0,
            owner: 'admin',
            title: listTitle,
            description: listDescription,
            image: listImage,
          });
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
            name={'listTitle'}
            type={'text'}
            label="Título"
            variant="standard"
          />
          <TextField
            id="outlined-multiline-static"
            name={'listDescription'}
            type={'text'}
            label="Descripción"
            multiline
            rows={3}
          />
          <CustomButton
            label="Subir archivo para portada"
            styles={{
              backgroundColor: 'transparent',
              border: '1px dashed #000000',
              height: '4em',
            }}
            textStyles={{
              textTransform: 'none',
              fontStyle: 'italic',
            }}
            testId="addFile"
            file={true}
          ></CustomButton>
        </Stack>
      </DialogContent>
      <StyledDialogActions>
        <CustomButton
          label="Crear"
          styles={{
            backgroundColor: '#f1b963',
            width: '30%',
          }}
          textStyles={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
          testId="createListButton"
          type="submit"
        ></CustomButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default CreateListForm;
