import { styled } from '@mui/material/styles';
import CustomButton from '../../components/customButton';
import PageTitle from '../../components/pageTitle';

export interface FilmDetailsProps {
  film: {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    genres: string;
  };
}

const InfoWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '1rem',

  '& img': {
    width: '23rem',
    height: 'auto',
    marginRight: '4rem',
    marginLeft: '10rem',
    marginTop: '7rem',
  },
});

const StyledDiv = styled('div')({
  paddingTop: '5rem',
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
});

const STitle = styled('p')({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  marginTop: '0.8rem',
  marginBottom: '-0.5rem',
});

const SText = styled('p')({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.2rem',
  marginTop: '1.2rem',
  paddingRight: '0.6rem',
});

const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
  borderRadius: '0.5rem',
});

const FilmDetails = ({ film }: FilmDetailsProps) => {
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
      <InfoWrapper>
        <img
          src={'https://image.tmdb.org/t/p/original' + film.poster_path}
          style={{ borderRadius: '3%' }}
          alt={film.title}
        />
        <StyledDiv>
          <PageTitle
            label={film.title}
            fontSize={'3rem'}
            textAlign={'left'}
            margin={'0 0 1rem 0'}
          />
          <Info film={film} />
          <ButtonWrapper>
            <CustomButton
              label="Ver tráiler"
              styles={{
                backgroundColor: '#93deff',
              }}
              textStyles={{
                textTransform: 'none',
                fontStyle: 'italic',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
              testId="watchTrailerButton"
            ></CustomButton>
            <CustomButton
              label="Añadir a lista"
              styles={{
                backgroundColor: '#7dd87d',
              }}
              textStyles={{
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
              testId="addFilmButton"
            ></CustomButton>
          </ButtonWrapper>
        </StyledDiv>
      </InfoWrapper>
    </>
  );
};

const Info = ({ film }: FilmDetailsProps) => {
  return (
    <>
      <SText>
        <b>Géneros: </b>
        {film.genres}
      </SText>
      <STitle>Descripción general:</STitle>
      <SText>{film.overview}</SText>
      <SText>
        <b>Fecha de lanzamiento: </b>
        {film.release_date}
      </SText>
    </>
  );
};

export default FilmDetails;
