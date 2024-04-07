import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './filmInfoApi';
import { styled } from '@mui/material/styles';

const InfoWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '1.5rem',
  '& img': {
    width: '20%',
    height: 'auto',
    marginRight: '4rem',
    marginLeft: '10rem',
    marginTop: '7rem',
  },
});

export interface FilmInfo {
  data: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    genres: string[];
  };
}

const FilmInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState({} as FilmInfo['data']);
  useEffect(() => {
    api.getFilmById(id).then((data) => {
      setFilm(data);
    });
  });

  return (
    <InfoWrapper>
      <img
        src={'https://image.tmdb.org/t/p/original' + film.poster_path}
        alt={film.title}
      />
      <div>
        <p>{film.title}</p>
        <p>{film.genres}</p>
        <p>{film.overview}</p>
        <p>{film.release_date}</p>
      </div>
    </InfoWrapper>
  );
};

export default FilmInfo;

//'https://image.tmdb.org/t/p/original' + film.poster_path
