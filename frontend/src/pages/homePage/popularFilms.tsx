import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { transformDate } from '../../components/transformDate';

export interface PopularFilmsProps {
  data: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
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

const PopularFilms = ({ data }: PopularFilmsProps) => {
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
      {data.map((film) => (
        <StyledLink key={film.id} to={`/movie/${film.id}`}>
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
                  image={
                    'https://image.tmdb.org/t/p/original' + film.poster_path
                  }
                  alt={film.title}
                />
                <StyledCardContent>{film.title}</StyledCardContent>
                <StyledDate>{transformDate(film.release_date)}</StyledDate>
              </div>
            </CardActionArea>
          </Card>
        </StyledLink>
      ))}
    </div>
  );
};

export default PopularFilms;
