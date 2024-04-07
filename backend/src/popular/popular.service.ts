import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from 'dotenv';
import { Popular } from './interfaces/popular.interface';

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
      const films: Popular[] = response.data.results.map((film) => {
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
}
