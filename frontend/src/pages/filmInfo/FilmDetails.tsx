import { styled } from '@mui/material/styles';
import PageTitle from '../../components/pageTitle';
import TrailerButton from '../../components/trailerButton';
import { useLocation } from 'react-router-dom';
import AddToListButton from '../../components/addToListButton';
import DeleteFromList from '../../components/deleteFromList';
import GoBackButton from '../../components/goBackButton';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

export interface FilmDetailsProps {
  film: {
    id: number;
    title: string;
    overview: string;
    poster: string;
    releaseDate: string;
    genres: string;
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
    marginTop: '2rem',
  },
});

const StyledDiv = styled('div')({
  paddingTop: '3rem',
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

const SGoBackButton = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '1.8rem 1rem',
});

const SCircularProgress = styled(CircularProgress)({
  color: 'black',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
  borderRadius: '0.5rem',
});

const FilmDetails = ({ film }: FilmDetailsProps) => {
  const actualPath = useLocation().pathname;
  const isInList = actualPath.includes('list');
  const userId = '';
  const listId = actualPath.split('/')[2];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!film.id) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [film]);

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
      <SGoBackButton>
        <GoBackButton />
      </SGoBackButton>
      {loading ? (
        <SCircularProgress size={60} />
      ) : (
        <>
          <InfoWrapper>
            <img
              src={film.poster}
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
                <TrailerButton video={film.trailer} />
                {userId === undefined ? null : !isInList ? (
                  <AddToListButton />
                ) : (
                  <DeleteFromList data={{ listId: listId, itemId: film.id }} />
                )}
              </ButtonWrapper>
            </StyledDiv>
          </InfoWrapper>
        </>
      )}
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
        {film.releaseDate}
      </SText>
    </>
  );
};

export default FilmDetails;
