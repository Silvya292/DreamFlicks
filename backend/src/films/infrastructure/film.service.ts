import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from 'dotenv';
import { FilmRepository } from '../domain/repository/filmRepository';
import { Film } from '../domain/entities/film';
import transformDate from '../../shared/transformDate';
import posterConcat from '../../shared/posterConcat';
import trailerConcat from '../../shared/trailerConcat';

@Injectable()
export class FilmService implements FilmRepository {
  async getPopular() {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        'https://api.themoviedb.org/3/trending/movie/week?language=es-ES&api_key=' +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      return response.data.results.map(
        (film: {
          id: number;
          title: string;
          poster_path: string;
          release_date: string;
        }) =>
          new Film(
            film.id,
            film.title,
            posterConcat(film.poster_path),
            transformDate(film.release_date)
          )
      );
    } catch (error) {
      throw new Error('Films not found');
    }
  }

  async findById(id: number) {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=` +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      return new Film(
        response.data.id,
        response.data.title,
        posterConcat(response.data.poster_path),
        transformDate(response.data.release_date),
        response.data.overview,
        response.data.genres.map((genre: { name: string }) => genre.name)
      );
    } catch (error) {
      throw new Error('Film not found');
    }
  }

  async getTrailer(id: number) {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=` +
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

  async search(query: string): Promise<Film[]> {
    dotenv.config();
    const apiKey = process.env.TMDB_API_KEY;
    const options = {
      url:
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=es-ES&page=1&api_key=` +
        apiKey,
    };

    try {
      const response = await axios.get(options.url);
      return response.data.results.map(
        (film: {
          id: number;
          title: string;
          overview: string;
          poster_path: string;
          release_date: string;
        }) =>
          new Film(
            film.id,
            film.title,
            posterConcat(film.poster_path),
            transformDate(film.release_date),
            film.overview
          )
      );
    } catch (error) {
      throw new Error('Films not found');
    }
  }
}
