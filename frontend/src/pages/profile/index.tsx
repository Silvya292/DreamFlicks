import styled from '@emotion/styled';
import homePageImage from './homePage.png';
import { Card, Divider, Grid } from '@mui/material';
import PageTitle from '../../components/pageTitle';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import CustomButton from '../../components/customButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${homePageImage});
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    z-index: 0;
  }
`;

const SCard = styled(Card)`
  margin-top: 10vh;
  width: 100rem;
  height: 40rem;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  z-index: 1;
  position: relative;
`;

const Text = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 6rem 2rem 6rem;
  text-transform: uppercase;
`;

const SImg = styled.img`
  border-radius: 20%;
  width: 20rem;
  height: 20rem;
  margin: 3rem;
`;

const Info = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin: 2rem 6rem;
`;

const SDivider = styled(Divider)`
  margin: 2rem 4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 10rem;
`;

const Profile = () => {
  const [user, setUser] = useState<{
    sub: string;
    name: string;
    email: string;
    picture: string;
  } | null>(jwtDecode(localStorage.getItem('user') || ''));

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      try {
        const decoded: {
          sub: string;
          name: string;
          email: string;
          picture: string;
        } = jwtDecode(token);
        console.log(decoded);
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

  const handleLists = () => {
    const url = '/user/' + user?.sub + '/list';
    window.history.pushState(null, '', url);
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
      <Wrapper>
        <SCard>
          <PageTitle
            label="Información del usuario"
            fontSize="4rem"
            textAlign="center"
            margin="2rem"
          />
          <Grid container>
            <Grid item xs={8.5}>
              <Text>Nombre de usuario:</Text>
              <Info> {user?.name}</Info>
              <SDivider variant="middle" />
              <Text>Correo electrónico:</Text>
              <Info>{user?.email}</Info>
              <SDivider variant="middle" />
              <ButtonContainer>
                <CustomButton
                  label="Ver listas"
                  styles={{
                    backgroundColor: '#f1b963',
                    width: '30%',
                  }}
                  textStyles={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                  }}
                  onClick={handleLists}
                />
                <CustomButton
                  label="Cerrar sesión"
                  styles={{
                    backgroundColor: '#e46161',
                    width: '30%',
                  }}
                  textStyles={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                  }}
                  onClick={handleLogout}
                />
              </ButtonContainer>
            </Grid>
            <Grid item xs={3.5}>
              <SImg src={user?.picture} alt="profile" />
            </Grid>
          </Grid>
        </SCard>
      </Wrapper>
    </>
  );
};

export default Profile;
