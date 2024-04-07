import PageTitle from '../../components/pageTitle';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from './homePageApi';
import PopularFilms from './popularFilms';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    api.getPopularFilms().then((data) => {
      setFilms(data);
    });
  }, []);

  return (
    <>
      <br />
      <Grid container>
        <Grid item xs={6}>
          <PageTitle
            label={'Películas populares de esta semana'}
            fontSize={'2.5rem'}
            textAlign={'center'}
          />
          <PopularFilms data={films} />
        </Grid>
        <Grid item xs={6}>
          <PageTitle
            label={'Series populares de esta semana'}
            fontSize={'2.5rem'}
            textAlign={'center'}
          />
          <PopularFilms data={films} />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
