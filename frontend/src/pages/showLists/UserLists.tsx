import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const CardContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
  paddingTop: '1rem',
});

const StyledCardContent = styled(CardContent)({
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

interface UserListsProps {
  data: {
    listId: number;
    title: string;
    description: string;
    image: string;
    isCollaborative: boolean;
  }[];
}

const UserLists = ({ data }: UserListsProps) => {
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
        {data.map((item, index) => (
          <StyledLink key={item.listId} to={`/user/id/list/${item.listId}`}>
            <Card
              key={index}
              style={{
                backgroundColor: '#f4f3f3',
                height: '22rem',
                width: '13rem',
              }}
            >
              <CardActionArea>
                <div
                  style={{
                    paddingTop: '0.2rem',
                    paddingRight: '0.2rem',
                    paddingLeft: '0.2rem',
                  }}
                >
                  {item.isCollaborative && (
                    <>
                      <CircleIcon
                        sx={{
                          fontSize: 50,
                          color: '#ffffff',
                        }}
                        style={{
                          position: 'absolute',
                          top: '0.5rem',
                          left: '0.5rem',
                          zIndex: 1,
                        }}
                      />
                      <GroupsIcon
                        sx={{ fontSize: 35 }}
                        style={{
                          position: 'absolute',
                          top: '0.85rem',
                          left: '1rem',
                          zIndex: 2,
                        }}
                      />
                    </>
                  )}
                  <CardMedia
                    style={{
                      borderRadius: '2%',
                      objectFit: 'cover',
                      position: 'relative',
                    }}
                    component="img"
                    height="300rem"
                    image={item.image}
                    alt={item.title}
                  />
                </div>
                <StyledCardContent>{item.title}</StyledCardContent>
              </CardActionArea>
            </Card>
          </StyledLink>
        ))}
      </CardContainer>
    </>
  );
};

export default UserLists;
