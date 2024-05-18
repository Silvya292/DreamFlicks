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
import api from '../../pages/showLists/listApi';
import { v4 as uuidv4 } from 'uuid';
import { ListItem } from 'backend/src/lists/domain/entities/item.interface';
import ConfirmModal from './confirmAddition';

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

type CreateListFormProps = {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  item?: ListItem;
};

interface CreateListValues {
  listId: string;
  title: string;
  description: string;
  image: string;
  owner: string;
  isShared: boolean;
  items: ListItem[];
}

const CreateListForm = ({ open, onClose, item }: CreateListFormProps) => {
  const [image, setImage] = useState('');

  const closeDialog = () => {
    onClose(false);
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const [currentListId, setCurrentListId] = useState<string>('');
  const openDialogConfirm = (listId: string) => {
    setCurrentListId(listId);
    setOpenConfirm(true);
  };

  const createList = useCallback(async (list: CreateListValues) => {
    const listValues: CreateListValues = {
      listId: uuidv4(),
      title: list.title,
      description: list.description || '',
      image: list.image || '',
      owner: list.owner,
      isShared: false,
      items: list.items,
    };
    await api.createList(listValues);
    if (listValues.items.length === 0) {
      closeDialog();
      const url = '/user/id/list';
      window.history.pushState(null, '', url);
      window.location.reload();
    }

    console.log(listValues.listId);
    openDialogConfirm(listValues.listId);
  }, []);

  const formTitle = 'Crear nueva lista';
  const formDescription =
    'Comienza a organizar tu contenido favorito e introduce los detalles de tu próxima lista.';

  return (
    <StyledDialog
      open={open}
      onClose={closeDialog}
      PaperProps={{
        component: 'form',
        onSubmit: async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form = event.currentTarget;
          const listId = uuidv4();
          const listTitle = form['listTitle'].value;
          const listDescription = form['listDescription'].value;
          await createList({
            listId: listId,
            title: listTitle,
            description: listDescription,
            image: image,
            owner: 'admin',
            isShared: false,
            items: item ? [item] : [],
          });
        },
      }}
    >
      <StyledDialogTitle>{formTitle}</StyledDialogTitle>
      <DialogContent>
        <StyledDialogContentText>{formDescription}</StyledDialogContentText>
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
        <ConfirmModal
          open={openConfirm}
          onClose={setOpenConfirm}
          listId={currentListId}
        />
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default CreateListForm;
