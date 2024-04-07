import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './serieInfoApi';
import SerieDetails from './SerieDetails';

export interface SerieInfo {
  data: {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    first_air_date: string;
    genres: string;
    number_of_seasons: number;
    number_of_episodes: number;
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

const SerieInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [serie, setSerie] = useState({} as SerieInfo['data']);
  useEffect(() => {
    api.getSerieById(id).then((data) => {
      data.first_air_date = transformDate(data.first_air_date);
      data.genres = data.genres.join(', ');
      setSerie(data);
    });
  }, [id]);

  return <SerieDetails serie={serie} />;
};

export default SerieInfo;
