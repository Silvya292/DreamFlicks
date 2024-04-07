import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './filmInfoApi';
import FilmDetails from './FilmDetails';

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

function transformDate(date: string) {
  const [year, month, day] = date.split('-');
  const months = [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic',
  ];
  const monthName = months[Number(month) - 1];
  return `${day} ${monthName} ${year}`;
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
