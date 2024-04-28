import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './filmInfoApi';
import FilmDetails from './FilmDetails';

export interface FilmInfo {
  film: {
    id: number;
    title: string;
    overview: string;
    poster: string;
    releaseDate: string;
    genres: string;
    trailer: string;
  };
}

const FilmInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState({} as FilmInfo['film']);
  useEffect(() => {
    api.getFilmById(Number(id)).then((data) => {
      data.genres = data.genres.join(', ');
      setFilm(data);
    });
  }, [id]);

  return <FilmDetails film={film} />;
};

export default FilmInfo;
