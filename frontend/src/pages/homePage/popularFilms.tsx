import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface PopularFilmsProps {
  data: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  }[];
}

const StyledCardContent = styled(CardContent)({
  paddingTop: '0.7rem',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  textAlign: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const PopularFilms = ({ data }: PopularFilmsProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingTop: '1.4rem',
        paddingLeft: '2rem',
      }}
    >
      {data.map((film) => (
        <Card
          key={film.id}
          style={{
            backgroundColor: '#ffffff',
            height: '20rem',
            width: '10rem',
          }}
        >
          <CardActionArea>
            <div
              style={{
                paddingTop: '0.1rem',
                paddingRight: '0.1rem',
                paddingLeft: '0.1rem',
              }}
            >
              <CardMedia
                style={{
                  borderRadius: '2%',
                  objectFit: 'cover',
                  position: 'relative',
                }}
                component="img"
                height="250rem"
                image={'https://image.tmdb.org/t/p/original' + film.poster_path}
                alt={film.title}
              />
              <StyledCardContent>{film.title}</StyledCardContent>
              <p>{film.release_date}</p>
            </div>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default PopularFilms;
