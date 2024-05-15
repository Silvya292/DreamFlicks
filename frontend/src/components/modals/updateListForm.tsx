import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import CustomButton from '../customButton';
import { styled } from '@mui/material/styles';
import api from '../../pages/listInfo/listInfoApi';

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
  textAlign: 'center',
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'center',
  display: 'flex',
});

type UpdateListFormProps = {
  id: string;
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

interface UpdateListValues {
  description: string;
  image: string;
}

const UpdateListForm = ({ id, open, onClose }: UpdateListFormProps) => {
  const [image, setImage] = useState('');
  const closeDialog = () => {
    onClose(false);
  };

  const updateList = useCallback(async (id: string, list: UpdateListValues) => {
    const listValues: UpdateListValues = {
      description: list.description,
      image: list.image || '',
    };
    await api.updateList(id, listValues);
  }, []);

  const formTitle = 'Editar lista';
  const formDescription = 'Edita los detalles de tu lista y haz que sea única.';

  return (
    <StyledDialog
      data-testId={'updateListForm'}
      open={open}
      onClose={closeDialog}
      PaperProps={{
        component: 'form',
        onSubmit: async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form = event.currentTarget;
          const listDescription = form['listDescription'].value;
          await updateList(id, {
            description: listDescription,
            image: image,
          });
          closeDialog();
          window.location.reload();
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
            onChange={(event: any) => {
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setImage(reader.result as string);
              };
            }}
          ></CustomButton>
        </Stack>
      </DialogContent>
      <StyledDialogActions>
        <CustomButton
          label="Editar"
          styles={{
            backgroundColor: '#f1b963',
            width: '30%',
          }}
          textStyles={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
          testId="updateListButton"
          type="submit"
        ></CustomButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default UpdateListForm;
