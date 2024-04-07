import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from 'dotenv';
import { Film } from './interfaces/film.interface';

@Injectable()
export class FilmService {
  async getFilmById(id: number) {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=` +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      const film: Film = {
        id: response.data.id,
        title: response.data.title,
        overview: response.data.overview,
        poster_path: response.data.poster_path,
        release_date: response.data.release_date,
        genres: response.data.genres.map((genre) => genre.name),
      };
      return JSON.stringify(film);
    } catch (error) {
      console.error('Error');
      throw error;
    }
  }
}
