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
  useEffect,
  useState,
} from 'react';
import CustomButton from '../customButton';
import { styled } from '@mui/material/styles';
import api from '../../pages/showLists/listApi';
import { jwtDecode } from 'jwt-decode';

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
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

interface CollaborativeListValues {
  url: string;
  userId: string;
}

const AddCollaborativeListForm = ({
  open,
  onClose,
}: CollaborativeListFormProps) => {
  const closeDialog = () => {
    onClose(false);
  };

  const [user, setUser] = useState<string>(
    jwtDecode(localStorage.getItem('user') || '')
  );
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      try {
        const decoded: { email: string } = jwtDecode(token);
        setUser(decoded.email);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const addCollaborativeList = useCallback(
    async ({ url }: CollaborativeListValues) => {
      await api.addCollaborativeList(url, user);
      window.location.reload();
    },
    []
  );

  const formTitle = 'Añadir lista colaborativa';
  const formDescription =
    'Disfruta del contenido que han compartido contigo y añade la URL de la lista colaborativa.';

  return (
    <StyledDialog
      data-testId={'addCollaborativeListForm'}
      open={open}
      onClose={closeDialog}
      PaperProps={{
        component: 'form',
        onSubmit: async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form = event.currentTarget;
          const url = form['url'].value;
          await addCollaborativeList({
            url,
            userId: user,
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

export default AddCollaborativeListForm;
