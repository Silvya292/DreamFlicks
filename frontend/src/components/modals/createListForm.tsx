import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import CustomButton from '../customButton';
import { styled } from '@mui/material/styles';

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

const CreateListForm = ({ open, onClose }: CreateListFormProps) => {
  const closeDialog = () => {
    onClose(false);
  };

  const printResults = () => {
    console.log('List created');
  };

  const formTitle = 'Crear nueva lista';
  const formDescription =
    'Comienza a organizar tu contenido favorito e introduce los detalles de tu nueva lista.';

  return (
    <StyledDialog
      data-testId={'createListForm'}
      open={open}
      onClose={closeDialog}
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
            label="Título"
            variant="standard"
          />
          <TextField
            id="outlined-multiline-static"
            label="Descripción"
            multiline
            rows={3}
          />
          <CustomButton
            label="Subir archivo"
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
          onClick={printResults}
        ></CustomButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default CreateListForm;
