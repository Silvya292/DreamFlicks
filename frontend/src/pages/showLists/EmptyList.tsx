import { Card, CardActionArea, CardMedia } from '@mui/material';
import emptyListImage from './emptyList.jpg';
import { styled } from '@mui/material/styles';

const CardContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '1rem',
});

const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '0 0.7rem',
});

const STitle = styled('div')({
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '1rem',
});

const SText = styled('p')({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '0.9rem',
  textAlign: 'center',
  padding: '0 0.5rem 0.2rem',
  color: '#4d4f4d',
});

interface EmptyListProps {
  clickFunction?: () => void;
}

const EmptyList = ({ clickFunction }: EmptyListProps) => {
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
      <CardContainer>
        <Card
          style={{
            backgroundColor: '#f4f3f3',
            width: '18rem',
          }}
        >
          <CardActionArea onClick={clickFunction}>
            <STitle>Aún no has creado ninguna lista</STitle>
            <ImageContainer>
              <CardMedia
                style={{
                  borderRadius: '5%',
                }}
                component="img"
                image={emptyListImage}
                alt="Empty list image"
              />
            </ImageContainer>
            <SText>Haz clic aquí para añadir tu primera lista</SText>
          </CardActionArea>
        </Card>
      </CardContainer>
    </>
  );
};

export default EmptyList;
