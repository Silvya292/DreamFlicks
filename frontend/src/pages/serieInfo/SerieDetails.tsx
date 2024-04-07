import CustomButton from '../../components/customButton';
import { styled } from '@mui/material/styles';

export interface SerieDetailsProps {
  serie: {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    first_air_date: string;
    genres: string;
    number_of_seasons: number;
    number_of_episodes: number;
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
  paddingTop: '5rem',
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

const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
  borderRadius: '0.5rem',
});

const SerieDetails = ({ serie }: SerieDetailsProps) => {
  return (
    <InfoWrapper>
      <img
        src={'https://image.tmdb.org/t/p/original' + serie.poster_path}
        style={{ borderRadius: '3%' }}
        alt={serie.name}
      />
      <StyledDiv>
        <h1>{serie.name}</h1>
        <p>Géneros: {serie.genres}</p>
        <p>{serie.overview}</p>
        <p>Número de temporadas: {serie.number_of_seasons}</p>
        <p>Número de episodios: {serie.number_of_episodes}</p>
        <p>Fecha de estreno: {serie.first_air_date}</p>
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
            testId="addserieButton"
          ></CustomButton>
        </ButtonWrapper>
      </StyledDiv>
    </InfoWrapper>
  );
};

export default SerieDetails;
