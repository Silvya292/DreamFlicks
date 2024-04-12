import CustomButton from '../../components/customButton';
import { styled } from '@mui/material/styles';
import PageTitle from '../../components/pageTitle';

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

const SerieDetails = ({ serie }: SerieDetailsProps) => {
  return (
    <InfoWrapper>
      <img
        src={'https://image.tmdb.org/t/p/original' + serie.poster_path}
        style={{ borderRadius: '3%' }}
        alt={serie.name}
      />
      <StyledDiv>
        <PageTitle
          label={serie.name}
          fontSize={'3rem'}
          textAlign={'left'}
          margin={'1.2rem 0 1rem 0'}
        />
        <Info serie={serie} />
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

const Info = ({ serie }: SerieDetailsProps) => {
  return (
    <>
      <SText>
        <b>Géneros: </b>
        {serie.genres}
      </SText>
      <STitle>Descripción general:</STitle>
      <SText>{serie.overview}</SText>
      <SText>
        <b>Número de temporadas: </b>
        {serie.number_of_seasons} ({serie.number_of_episodes} episodios)
      </SText>
      <SText>
        <b>Fecha de estreno: </b>
        {serie.first_air_date}
      </SText>
    </>
  );
};

export default SerieDetails;
