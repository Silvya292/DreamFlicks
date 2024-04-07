import { styled } from '@mui/material/styles';
import CustomButton from '../../components/customButton';

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
  padding: '1.5rem',
  '& img': {
    width: '23rem',
    height: 'auto',
    marginRight: '4rem',
    marginLeft: '10rem',
    marginTop: '7rem',
  },
});

const StyledDiv = styled('div')({
  paddingTop: '4rem',
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  '& h1': {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  '& p': {
    fontSize: '1.2rem',
  },
});

const StyledText = styled('p')({
  fontSize: '1.5rem',
});

const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
  borderRadius: '0.5rem',
});

const FilmDetails = ({ film }: FilmDetailsProps) => {
  return (
    <InfoWrapper>
      <img
        src={'https://image.tmdb.org/t/p/original' + film.poster_path}
        style={{ borderRadius: '3%' }}
        alt={film.title}
      />
      <StyledDiv>
        <h1>{film.title}</h1>
        <StyledText>Géneros: {film.genres}</StyledText>
        <StyledText>{film.overview}</StyledText>
        <StyledText>Fecha de estreno: {film.release_date}</StyledText>
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
            }}
            testId="watchTrailerButton"
          ></CustomButton>
          <CustomButton
            label="Añadir a lista"
            styles={{
              backgroundColor: '#7dd87d',
            }}
            textStyles={{ textTransform: 'none', fontWeight: 'bold' }}
            testId="addFilmButton"
          ></CustomButton>
        </ButtonWrapper>
      </StyledDiv>
    </InfoWrapper>
  );
};

export default FilmDetails;
