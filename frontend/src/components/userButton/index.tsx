import React, { useEffect, useState } from 'react';
import { Button, Menu, MenuItem, styled } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import CustomButton from '../customButton';
import Login from '../modals/login';

const SImg = styled('img')({
  borderRadius: '50%',
  width: '2.8rem',
  height: '2.8rem',
});

const SButton = styled(Button)({
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#000000',

  '&:hover': {
    backgroundColor: '#ececec',
    color: '#000000',
  },
});

const SMenu = styled(Menu)({
  '& .MuiPaper-root': {
    marginLeft: '0.5rem',
    marginTop: '0.45rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.3rem',
    width: '9rem',
  },
});

const UserContainer = styled('div')({
  display: 'flex',
  gap: '0.2em',
  alignItems: 'center',
});

const UserButton = () => {
  const [user, setUser] = useState<{
    sub: string;
    name: string;
    picture: string;
  } | null>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const click = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseClick = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      try {
        const decoded: { sub: string; name: string; picture: string } =
          jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const handleProfile = () => {
    const url = '/user/' + user?.sub;
    window.history.pushState(null, '', url);
    window.location.reload();
  };

  const handleLists = () => {
    const url = '/user/' + user?.sub + '/list';
    window.history.pushState(null, '', url);
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.history.pushState(null, '', '/');
    window.location.reload();
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={''}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      {user ? (
        <UserContainer>
          <SButton onClick={handleClick}>{user.name}</SButton>
          <SImg src={user.picture} alt="User" />
          <SMenu anchorEl={anchorEl} open={click} onClose={handleCloseClick}>
            <MenuItem onClick={handleProfile}>Mi perfil</MenuItem>
            <MenuItem onClick={handleLists}>Mis listas</MenuItem>
            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
          </SMenu>
        </UserContainer>
      ) : (
        <>
          <CustomButton
            label="Inicia sesión 🎥"
            onClick={handleOpen}
            styles={{ border: '1px solid #000000' }}
          />
          <Login open={open} handleClose={handleClose} />
        </>
      )}
    </>
  );
};

export default UserButton;
