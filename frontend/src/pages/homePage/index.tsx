import PageTitle from '../../components/pageTitle';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from './homePageApi';
import PopularFilms from './popularFilms';
import PopularSeries from './popularSeries';
import { styled } from '@mui/material/styles';
import SearchBar from '../../components/searchBar';
import Search from '@mui/icons-material/Search';

const StyledDescription = styled('div')({
  fontSize: '1rem',
  textAlign: 'center',
  padding: '0.8rem',
  color: '#353635',
});

const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    api.getPopularFilms().then((data) => {
      setFilms(data);
    });
  }, []);

  const [series, setSeries] = useState([]);
  useEffect(() => {
    api.getPopularTV().then((data) => {
      setSeries(data);
    });
  }, []);

  const descriptionFilms =
    '¿Buscas algo para ver esta semana? Explora las películas más populares y encuentra tu próxima película favorita';

  const descriptionSeries =
    'Explora las series más populares de esta semana y déjate llevar por nuevas aventuras desde la comodidad de tu hogar';

  return (
    <>
      <div>
        <Grid container>
          <PageTitle
            label={'Dreamflicks'}
            fontSize={'3rem'}
            textAlign={'center'}
          />
          <SearchBar />
        </Grid>
        <br />
        <br />
        <Grid container>
          <Grid item xs={6}>
            <PageTitle
              label={'Películas populares de esta semana'}
              fontSize={'2.5rem'}
              textAlign={'center'}
            />
            <StyledDescription>{descriptionFilms}</StyledDescription>
            <PopularFilms data={films} />
          </Grid>
          <Grid item xs={6}>
            <PageTitle
              label={'Series populares de esta semana'}
              fontSize={'2.5rem'}
              textAlign={'center'}
            />
            <StyledDescription>{descriptionSeries}</StyledDescription>
            <PopularSeries data={series} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
