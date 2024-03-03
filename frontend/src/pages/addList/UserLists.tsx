import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCardContent = styled(CardContent)({
  fontSize: '1rem',
  fontWeight: 'bold',
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
                style={{ borderRadius: '2%' }}
                component="img"
                width="170rem"
                height="250rem"
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
