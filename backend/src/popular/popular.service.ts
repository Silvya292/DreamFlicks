import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from 'dotenv';
import { PopularFilm, PopularTV } from './interfaces/popular.interface';

@Injectable()
export class PopularService {
  async getPopularFilms() {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        'https://api.themoviedb.org/3/trending/movie/week?language=es-ES&api_key=' +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      const films: PopularFilm[] = response.data.results.map((film) => {
        return {
          id: film.id,
          title: film.title,
          poster_path: film.poster_path,
          release_date: film.release_date,
        };
      });
      return JSON.stringify(films);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPopularTV() {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        'https://api.themoviedb.org/3/trending/tv/week?language=es-ES&api_key=' +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      const series: PopularTV[] = response.data.results.map((serie) => {
        return {
          id: serie.id,
          name: serie.name,
          poster_path: serie.poster_path,
          first_air_date: serie.first_air_date,
        };
      });
      return JSON.stringify(series);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
