import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './filmInfoApi';
import FilmDetails from './FilmDetails';
import { transformDate } from '../../components/transformDate';

export interface FilmInfo {
  data: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    genres: string;
  };
}

const FilmInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState({} as FilmInfo['data']);
  useEffect(() => {
    api.getFilmById(id).then((data) => {
      data.release_date = transformDate(data.release_date);
      data.genres = data.genres.join(', ');
      setFilm(data);
    });
  }, [id]);

  return <FilmDetails film={film} />;
};

export default FilmInfo;
