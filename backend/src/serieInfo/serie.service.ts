import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from 'dotenv';
import { Serie } from './interfaces/serie.interface';

@Injectable()
export class SerieService {
  async getSerieById(id: number) {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        `https://api.themoviedb.org/3/tv/${id}?language=es-ES&api_key=` +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      const serie: Serie = {
        id: response.data.id,
        name: response.data.name,
        overview: response.data.overview,
        poster_path: response.data.poster_path,
        first_air_date: response.data.first_air_date,
        genres: response.data.genres.map((genre) => genre.name),
        number_of_seasons: response.data.number_of_seasons,
        number_of_episodes: response.data.number_of_episodes,
      };
      return JSON.stringify(serie);
    } catch (error) {
      console.error('Error');
      throw error;
    }
  }
}
