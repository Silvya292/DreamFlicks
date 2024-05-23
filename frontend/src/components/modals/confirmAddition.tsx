import styled from '@emotion/styled';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import CustomButton from '../customButton';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    width: '30%',
    padding: '0.5%',
  },
});

const ConfirmModal = ({
  open,
  onClose,
  listId,
}: {
  open: boolean;
  onClose: any;
  listId?: string;
}) => {
  const [user, setUser] = useState<string>();
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      try {
        const decoded: { sub: string } = jwtDecode(token);
        setUser(decoded.sub);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const formTitle = '¡Todo listo!';
  const formDescription =
    'El título seleccionado se ha añadido correctamente a tu lista. ¿Quieres añadir más contenido?';

  const handleViewLists = () => {
    onClose(false);
    const url = 'user/' + user + '/list/' + listId;
    window.history.pushState(null, '', url);
    window.location.reload();
  };

  const handleAddMore = () => {
    onClose(false);
    window.history.pushState(null, '', '/');
    window.location.reload();
  };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle>{formTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{formDescription}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <CustomButton
          label="Ver lista"
          styles={{
            backgroundColor: '#f1b963',
            width: '30%',
          }}
          textStyles={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
          testId="viewListsButton"
          onClick={handleViewLists}
        />
        <CustomButton
          label="Seguir añadiendo"
          styles={{
            backgroundColor: '#00bbf0',
            width: '35%',
          }}
          textStyles={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
          testId="addMoreButton"
          onClick={handleAddMore}
        />
      </DialogActions>
    </StyledDialog>
  );
};

export default ConfirmModal;
