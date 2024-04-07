import { useParams } from 'react-router-dom';

const FilmInfo = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Film Info</h1>
      <p>{id}</p>
    </div>
  );
};

export default FilmInfo;
