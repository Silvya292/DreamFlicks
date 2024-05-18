import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
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
import { ListItem } from 'backend/src/lists/domain/entities/item.interface';
import { useLocation, useParams } from 'react-router-dom';
import CreateListForm from './createListForm';
import axios from 'axios';

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    width: '40%',
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

const SDialogContent = styled(DialogContent)({
  padding: '0.5rem 1.5rem',
});

const StyledDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '2rem',
});

const StyledDialogActionsAdd = styled(DialogActions)({
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const SStack = styled(Stack)({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem 1.5rem',
});

type AddItemToListProps = {
  userId: string;
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

interface ListData {
  listId: string;
  title: string;
  description: string;
  image: string;
  owner: string;
  isShared: boolean;
  items: [ListItem];
}

const AddItemToListForm = ({ userId, open, onClose }: AddItemToListProps) => {
  const addItem = async (id: string, item: ListItem) => {
    const API_URL = 'http://localhost:3000/api';
    const response = await axios.patch(`${API_URL}/list/addItem/${id}`, item);
    return response.data;
  };

  const closeDialog = () => {
    onClose(false);
  };

  const [openCreateList, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  const addItemToList = useCallback(async (listId: string, item: ListItem) => {
    await addItem(listId, item);
  }, []);

  const formTitle = 'Añadir a una lista';
  const formDescription =
    'No te pierdas nada y añade este contenido a una de tus listas';
  const formOptions = '¿No encaja en ninguna de tus listas?';

  const itemId = useParams<{ id: string }>().id;
  const itemType = useLocation().pathname.split('/')[1];
  const item = {
    id: Number(itemId),
    type: itemType,
  };

  const user = 'admin';
  const [listData, setListData] = useState<ListData[]>([]);
  useEffect(() => {
    api.getLists(user).then((data: ListData[]) => {
      setListData(data);
    });
  }, []);

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
          const listId = form['list'].value;
          await addItemToList(listId, item);
          closeDialog();
          const url = '/user/id/list';
          window.history.pushState(null, '', url);
          window.location.reload();
        },
      }}
    >
      <StyledDialogTitle data-testId={'listTitle'}>
        {formTitle}
      </StyledDialogTitle>
      <SDialogContent>
        <StyledDialogContentText data-testId={'listDescription'}>
          {formDescription}
        </StyledDialogContentText>
      </SDialogContent>
      <SStack>
        <TextField
          id="list"
          select
          fullWidth
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {listData.map(
            (list) =>
              list.items &&
              !list.items.find((item) => item.id === Number(itemId)) && (
                <option key={list.listId} value={list.listId}>
                  {list.title}
                </option>
              )
          )}
        </TextField>
      </SStack>
      <StyledDialogActions>
        <CustomButton
          label="Añadir a esta lista"
          styles={{
            backgroundColor: '#f1b963',
            width: '40%',
          }}
          textStyles={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
          testId="addItemToListButton"
          type="submit"
        ></CustomButton>
      </StyledDialogActions>
      <Divider variant="middle" />
      <StyledDialogActionsAdd>
        <SDialogContent>
          <StyledDialogContentText data-testId={'listOptions'}>
            {formOptions}
          </StyledDialogContentText>
        </SDialogContent>
        <CustomButton
          label="Crear una nueva lista"
          styles={{
            backgroundColor: '#cbf078',
            width: '40%',
          }}
          textStyles={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
          testId="createNewListButton"
          onClick={openDialog}
        ></CustomButton>
        <CreateListForm open={openCreateList} onClose={setOpen} item={item} />
      </StyledDialogActionsAdd>
    </StyledDialog>
  );
};

export default AddItemToListForm;
