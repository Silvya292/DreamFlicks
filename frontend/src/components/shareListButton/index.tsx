import CustomButton from '../customButton';
import { useEffect, useState } from 'react';
import { Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import api from '../../pages/listInfo/listInfoApi';
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function copyToClipboard() {
  const completeUrl = window.location.href;
  const shareUrl = 'share/';
  const url = completeUrl.split('/').slice(5, completeUrl.length).join('/');
  navigator.clipboard.writeText(shareUrl + url);
  return shareUrl + url;
}

const ShareListButton = () => {
  const id = useParams<{ listId: string }>().listId;
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    name: string;
  }>(jwtDecode(localStorage.getItem('user') || ''));
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      try {
        const decoded: { name: string } = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const handleClick = (id: string) => {
    setOpen(true);
    const url = copyToClipboard();
    api.makeListCollaborative(id, user.name, url);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <Button size="small" onClick={handleClose} />
      <IconButton
        style={{
          color: '#ffffff',
        }}
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <CustomButton
        label="Compartir lista"
        styles={{
          backgroundColor: '#9febeb',
        }}
        textStyles={{
          textTransform: 'none',
        }}
        testId="shareListButton"
        onClick={() => handleClick(id ?? '')}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Enlace de lista colaborativa copiado"
        action={action}
      />
    </>
  );
};

export default ShareListButton;
