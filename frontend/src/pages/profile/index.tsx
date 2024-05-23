import styled from '@emotion/styled';
import homePageImage from './homePage.png';
import { Card, Grid } from '@mui/material';
import PageTitle from '../../components/pageTitle';

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

const Profile = () => {
  return (
    <Wrapper>
      <SCard>
        <PageTitle
          label="Información del usuario"
          fontSize="3rem"
          textAlign="center"
        />
        <Grid container>
          <Grid item xs={8}>
            <h1>Profile</h1>
          </Grid>
          <Grid item xs={4}>
            <h3>Picture</h3>
          </Grid>
        </Grid>
      </SCard>
    </Wrapper>
  );
};

export default Profile;
