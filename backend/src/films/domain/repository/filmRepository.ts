import { Film } from '../entities/film';

export abstract class FilmRepository {
  abstract getPopular(): Promise<Film[]>;

  abstract findById(id: number): Promise<Film>;

  abstract getTrailer(id: number): Promise<string>;

  abstract search(query: string): Promise<Film[]>;
}
