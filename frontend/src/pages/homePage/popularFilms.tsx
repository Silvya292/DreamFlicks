import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export interface PopularFilmsProps {
  data: {
    id: number;
    title: string;
    poster: string;
    releaseDate: string;
  }[];
}

const StyledCardContent = styled(CardContent)({
  paddingTop: '0.8rem',
  paddingBottom: '0.5rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const StyledDate = styled(CardContent)({
  paddingTop: '0.1rem',
  textAlign: 'center',
  fontSize: '0.9rem',
  color: '#757774',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const SCircularProgress = styled(CircularProgress)({
  color: 'black',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const PopularFilms = ({ data }: PopularFilmsProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginLeft: '2.5rem',
        paddingTop: '0.5rem',
      }}
    >
      {loading ? (
        <SCircularProgress size={60} />
      ) : (
        data.map((film) => (
          <StyledLink key={film.id} to={`/film/${film.id}`}>
            <Card
              key={film.id}
              style={{
                backgroundColor: '#ffffff',
                height: '20rem',
                width: '10rem',
              }}
            >
              <CardActionArea>
                <div>
                  <CardMedia
                    style={{
                      borderRadius: '1%',
                      objectFit: 'cover',
                      position: 'relative',
                    }}
                    component="img"
                    height="250rem"
                    image={film.poster}
                    alt={film.title}
                  />
                  <StyledCardContent>{film.title}</StyledCardContent>
                  <StyledDate>{film.releaseDate}</StyledDate>
                </div>
              </CardActionArea>
            </Card>
          </StyledLink>
        ))
      )}
    </div>
  );
};

export default PopularFilms;
