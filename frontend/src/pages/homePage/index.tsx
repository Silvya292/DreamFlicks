import PageTitle from '../../components/pageTitle';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from './homePageApi';
import PopularFilms from './popularFilms';
import PopularSeries from './popularSeries';
import { styled } from '@mui/material/styles';
import SearchBar from '../../components/searchBar';
import homePageImage from './homePage.png';

const WindowContainer = styled('div')({
  height: '85vh',
});

const SGrid = styled(Grid)({
  height: '50%',
  backgroundImage: `url(${homePageImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  marginBottom: '2rem',
});

const HomeContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem',
  gap: '1rem',
});

const SDescription = styled('div')({
  fontSize: '1.05rem',
  textAlign: 'center',
  color: '#fcfcfc',
  padding: '0 1rem 2rem 1rem',
  fontFamily: 'Roboto',
});

const StyledDescription = styled('div')({
  fontSize: '1rem',
  textAlign: 'center',
  padding: '0.8rem',
  color: '#353635',
  fontFamily: 'Roboto',
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

  const homePageDescription =
    'Disfruta de un viaje cinematográfico inolvidable y al alcance de tu mano. ' +
    'Desde los éxitos de taquilla hasta las gemas ocultas, explora, organiza y comparte tus descubrimientos favoritos. ' +
    'DreamFlicks no solo es una aplicación, ¡es tu compañero de cine definitivo!';
  const descriptionFilms =
    '¿Buscas algo para ver esta semana? Explora las películas más populares y encuentra tu próxima película favorita';
  const descriptionSeries =
    'Explora las series más populares de esta semana y déjate llevar por nuevas aventuras desde la comodidad de tu hogar';

  return (
    <WindowContainer>
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
      <SGrid container>
        <Grid item xs={6} sx={{ alignContent: 'center' }}>
          <HomeContainer>
            <PageTitle
              label={'Dreamflicks'}
              fontSize={'4rem'}
              textAlign={'center'}
              color={'#ffffff'}
            />
            <SDescription>{homePageDescription}</SDescription>
            <SearchBar />
          </HomeContainer>
        </Grid>
      </SGrid>
      <Grid container style={{ height: '50%' }}>
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
    </WindowContainer>
  );
};

export default HomePage;
