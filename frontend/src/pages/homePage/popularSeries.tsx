import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { transformDate } from '../../components/transformDate';

export interface PopularSeriesProps {
  data: {
    id: number;
    name: string;
    poster_path: string;
    first_air_date: string;
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

const PopularSeries = ({ data }: PopularSeriesProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingTop: '0.5rem',
        marginLeft: '2.5rem',
      }}
    >
      {data.map((serie) => (
        <StyledLink key={serie.id} to={`/tv/${serie.id}`}>
          <Card
            key={serie.id}
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
                  alt={serie.name}
                  height="250rem"
                  image={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  title={serie.name}
                />
                <StyledCardContent>{serie.name}</StyledCardContent>
                <StyledDate>{transformDate(serie.first_air_date)}</StyledDate>
              </div>
            </CardActionArea>
          </Card>
        </StyledLink>
      ))}
    </div>
  );
};

export default PopularSeries;
