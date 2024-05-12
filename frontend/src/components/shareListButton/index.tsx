import CustomButton from '../customButton';
import { useState } from 'react';
import { Button, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function copyToClipboard() {
  const completeUrl = window.location.href;
  const shareUrl = 'share/';
  const url = completeUrl.split('/').slice(5, completeUrl.length).join('/');
  navigator.clipboard.writeText(shareUrl + url);
}

const ShareListButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    copyToClipboard();
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
        onClick={handleClick}
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
