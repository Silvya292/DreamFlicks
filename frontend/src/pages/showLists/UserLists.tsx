import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
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
    listTitle: string;
    listDescription: string;
    listImage: string;
    isCollaborative: boolean;
  }[];
}

const UserLists = ({ data }: UserListsProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        paddingTop: '1rem',
      }}
    >
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
                  image={item.listImage}
                  alt={item.listTitle}
                />
              </div>
              <StyledCardContent>{item.listTitle}</StyledCardContent>
            </CardActionArea>
          </Card>
        </StyledLink>
      ))}
    </div>
  );
};

export default UserLists;
