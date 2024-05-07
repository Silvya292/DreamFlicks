import { TvSerieRepository } from '../domain/repository/tvSerieRepository';
import axios from 'axios';
import dotenv from 'dotenv';
import posterConcat from '../../shared/posterConcat';
import transformDate from '../../shared/transformDate';
import { TvSerie } from '../domain/entities/tvSerie';
import trailerConcat from '../../shared/trailerConcat';

export class TvSerieService implements TvSerieRepository {
  async getPopular() {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        'https://api.themoviedb.org/3/trending/tv/week?language=es-ES&api_key=' +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      return response.data.results.map(
        (serie: {
          id: number;
          name: string;
          poster_path: string;
          first_air_date: string;
        }) =>
          new TvSerie(
            serie.id,
            serie.name,
            posterConcat(serie.poster_path),
            transformDate(serie.first_air_date)
          )
      );
    } catch (error) {
      throw new Error('Serie not found');
    }
  }

  async findById(id: number) {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        `https://api.themoviedb.org/3/tv/${id}?language=es-ES&api_key=` +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      return new TvSerie(
        response.data.id,
        response.data.name,
        posterConcat(response.data.poster_path),
        transformDate(response.data.first_air_date),
        response.data.overview,
        response.data.number_of_seasons,
        response.data.number_of_episodes,
        response.data.genres.map((genre: { name: string }) => genre.name)
      );
    } catch (error) {
      throw new Error('Serie not found');
    }
  }

  async getTrailer(id: number) {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US&api_key=` +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      const trailer = response.data.results.find(
        (video) => video.type === 'Trailer'
      );
      return trailerConcat(trailer.key);
    } catch (error) {
      throw new Error('Trailer not found');
    }
  }

  async search(query: string) {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=true&language=es-ES&page=1&api_key=` +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      return response.data.results.map(
        (serie: {
          id: number;
          name: string;
          poster_path: string;
          first_air_date: string;
          overview: string;
        }) =>
          new TvSerie(
            serie.id,
            serie.name,
            posterConcat(serie.poster_path),
            transformDate(serie.first_air_date),
            serie.overview
          )
      );
    } catch (error) {
      throw new Error('Serie not found');
    }
  }
}
