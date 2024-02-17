import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const addListButton = {
  color: 'black',
  backgroundColor: '#cbf078',
};

const listAdditionForm = {
  width: '30%',
  height: '50%',
  backgroundColor: 'white',
  margin: 'auto',
  marginTop: '10%',
  borderRadius: '20px',
};

const formBox = {
  padding: '40px',
};

export default function useCreateList() {
  const [openForm, setOpenForm] = useState(false);
  const showListAddition = () => setOpenForm(true);
  const closeListAddition = () => setOpenForm(false);

  return (
    <>
      <Button
        sx={{ textTransform: 'none' }}
        style={addListButton}
        data-testid="listAdditionButton"
        onClick={showListAddition}
      >
        Añadir lista
      </Button>
      <Modal
        open={openForm}
        onClose={closeListAddition}
        data-testid="addListForm"
      >
        <Box style={listAdditionForm}>
          <Container
            sx={{ display: 'flex', flexDirection: 'column' }}
            style={formBox}
          >
            <Typography align={'center'} variant="h5" fontWeight={'bold'}>
              CREAR NUEVA LISTA
            </Typography>
            <br />
            <Typography variant="body1" fontWeight={'bold'}>
              Nombre
            </Typography>
            <TextField required id="listName" variant="standard" />
            <br />
            <Typography variant="body1" fontWeight={'bold'}>
              Descripción
            </Typography>
            <TextField id="listDescription" multiline rows={4} />
          </Container>
          <Button sx={{ textTransform: 'none' }} style={addListButton}>
            Crear
          </Button>
        </Box>
      </Modal>
    </>
  );
}
