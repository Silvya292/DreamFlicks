import { Card, CardActionArea, CardMedia } from '@mui/material';
import emptyListImage from './emptyList.jpg';

interface EmptyListProps {
  clickFunction?: () => void;
}

const EmptyList = ({ clickFunction }: EmptyListProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '1rem',
      }}
    >
      <Card
        style={{
          backgroundColor: '#f4f3f3',
          width: '18rem',
        }}
      >
        <CardActionArea onClick={clickFunction}>
          <div
            style={{
              fontSize: '1.05rem',
              textAlign: 'center',
              paddingTop: '1rem',
            }}
          >
            Aún no has creado ninguna lista
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <CardMedia
              style={{ borderRadius: '5%' }}
              component="img"
              image={emptyListImage}
              alt="Empty list image"
            />
          </div>
          <div
            style={{
              fontSize: '0.9rem',
              textAlign: 'center',
              paddingBottom: '1rem',
              color: '#4d4f4d',
            }}
          >
            Haz clic aquí para añadir tu primera lista
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default EmptyList;
