import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

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
    listTitle: string;
    listDescription: string;
    listImage: string;
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
                paddingTop: '0.4rem',
                paddingRight: '0.4rem',
                paddingLeft: '0.4rem',
              }}
            >
              <CardMedia
                style={{ borderRadius: '2%', objectFit: 'cover' }}
                component="img"
                height="300rem"
                image={item.listImage}
                alt={item.listTitle}
              />
            </div>
            <StyledCardContent>{item.listTitle}</StyledCardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default UserLists;
