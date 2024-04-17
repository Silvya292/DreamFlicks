import { Card } from '@mui/material';

interface ItemListProps {
  items:
    | {
        id: number;
        title: string;
        name: string;
        overview: string;
        poster_path: string;
        release_date: string;
        first_air_date: string;
      }[]
    | undefined;
}

const ItemList = ({ items }: ItemListProps) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      {items &&
        items.map((item) => (
          <Card
            key={item.id}
            style={{
              width: '100%',
            }}
          >
            <h2>{item.title || item.name}</h2>
            <p>{item.overview}</p>
            <img
              width={200}
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title || item.name}
            />
            <p>{item.release_date || item.first_air_date}</p>
          </Card>
        ))}
    </div>
  );
};

export default ItemList;
