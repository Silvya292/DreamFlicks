import { Card, CardActionArea } from '@mui/material';
import PageTitle from '../pageTitle';
import { styled } from '@mui/material/styles';
import { Link, useParams } from 'react-router-dom';

const SText = styled('p')({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1rem',
  marginBottom: '1rem',
});

const CardContainer = styled('div')({
  width: '98%',
  marginLeft: '1%',
  marginRight: '1%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '0.5rem',
});

const InfoContainer = styled('div')({
  padding: '1rem 1.5rem 1rem 2rem',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1rem',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

interface ItemListProps {
  items:
    | {
        id: number;
        title: string;
        overview: string;
        poster: string;
        releaseDate: string;
        type: string;
      }[]
    | undefined;
  type: string;
}

const ItemList = ({ items, type }: ItemListProps) => {
  const { listId } = useParams<{ listId: string }>();
  let url = '';
  if (type === 'list') {
    url = '/list/' + listId;
  }
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
        {items &&
          items.map((item) => (
            <Card
              key={item.id}
              style={{
                width: 'calc(50% - 0.5rem)',
                marginBottom: '1rem',
              }}
            >
              <StyledLink to={`${url}/${item.type}/${item.id}`}>
                <CardActionArea
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <img
                    src={item.poster}
                    alt={item.title}
                    style={{
                      width: '12rem',
                      height: '18rem',
                      objectFit: 'cover',
                    }}
                  />
                  <InfoContainer>
                    <PageTitle
                      label={item.title}
                      fontSize={'2rem'}
                      textAlign={'left'}
                    />
                    <SText>{item.overview}</SText>
                    <SText>
                      <b>Fecha de estreno: </b>
                      {item.releaseDate
                        ? `${item.releaseDate}`
                        : 'No disponible'}
                    </SText>
                  </InfoContainer>
                </CardActionArea>
              </StyledLink>
            </Card>
          ))}
      </CardContainer>
    </>
  );
};

export default ItemList;
