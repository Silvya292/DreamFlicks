import { Card, CardActionArea, CardMedia } from '@mui/material';
import { FC } from 'react';

interface EmptyListProps {
  clickFunction?: () => void;
}

const EmptyList: FC<EmptyListProps> = ({ clickFunction }) => {
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
          width: '20%',
        }}
      >
        <CardActionArea onClick={clickFunction}>
          <div
            style={{
              fontSize: '1.1rem',
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
              style={{ borderRadius: '8%' }}
              component="img"
              image="https://img.freepik.com/foto-gratis/nino-tiro-medio-palomitas-maiz_23-2148875113.jpg?w=1380&t=st=1709467566~exp=1709468166~hmac=09fb30d238fe248942060fe0a987f1406fb585be298733be9c683d337a1f37a7"
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
