import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './serieInfoApi';
import SerieDetails from './SerieDetails';

export interface SerieInfo {
  data: {
    id: number;
    name: string;
    overview: string;
    poster: string;
    releaseDate: string;
    genres: string;
    numberOfSeasons: number;
    numberOfEpisodes: number;
    trailer: string;
  };
}

const SerieInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [serie, setSerie] = useState({} as SerieInfo['data']);
  useEffect(() => {
    api.getSerieById(id).then((data) => {
      data.genres = data.genres.join(', ');
      setSerie(data);
    });
  }, [id]);

  return <SerieDetails serie={serie} />;
};

export default SerieInfo;
