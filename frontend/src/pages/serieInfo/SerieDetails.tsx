import { styled } from '@mui/material/styles';
import PageTitle from '../../components/pageTitle';
import TrailerButton from '../../components/trailerButton';
import { useLocation } from 'react-router-dom';
import AddToListButton from '../../components/addToListButton';
import DeleteFromList from '../../components/deleteFromList';

export interface SerieDetailsProps {
  serie: {
    id: number;
    name: string;
    overview: string;
    poster: string;
    releaseDate: string;
    genres: string;
    numberOfSeasons: number;
    numberOfEpisodes: number;
    trailer: string;
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
  const actualPath = useLocation().pathname;
  const isInList = actualPath.includes('list');

  return (
    <InfoWrapper>
      <img src={serie.poster} style={{ borderRadius: '3%' }} alt={serie.name} />
      <StyledDiv>
        <PageTitle
          label={serie.name}
          fontSize={'3rem'}
          textAlign={'left'}
          margin={'1.2rem 0 1rem 0'}
        />
        <Info serie={serie} />
        <ButtonWrapper>
          <TrailerButton video={serie.trailer} />
          {!isInList ? <AddToListButton /> : <DeleteFromList />}
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
        {serie.numberOfSeasons} ({serie.numberOfEpisodes} episodios)
      </SText>
      <SText>
        <b>Fecha de estreno: </b>
        {serie.releaseDate}
      </SText>
    </>
  );
};

export default SerieDetails;
