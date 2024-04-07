import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

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

function transformDate(date: string) {
  const [year, month, day] = date.split('-');
  const months = [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic',
  ];
  const monthName = months[Number(month) - 1];
  return `${day} ${monthName} ${year}`;
}

const PopularSeries = ({ data }: PopularSeriesProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingTop: '1.4rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}
    >
      {data.map((serie) => (
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
      ))}
    </div>
  );
};

export default PopularSeries;
