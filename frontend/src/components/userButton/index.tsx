import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Button, styled } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import CustomButton from '../customButton';
import Login from '../modals/login';

const SImg = styled('img')({
  borderRadius: '50%',
  width: '2.8rem',
  height: '2.8rem',
});

const Text = styled('p')({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#000000',
});

const UserContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

const UserButton = () => {
  const [user, setUser] = useState<{ name: string; picture: string } | null>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      try {
        const decoded: { name: string; picture: string } = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

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
          <Button
            variant="outlined"
            color="primary"
            onClick={handleLogout}
            style={{ marginLeft: 8 }}
          >
            Logout
          </Button>
          <Text>{user.name}</Text>
          <SImg src={user.picture} alt="User" />
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
