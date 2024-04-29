import { Film } from '../entities/film';

export abstract class FilmRepository {
  abstract findById(id: number): Promise<Film>;

  abstract getTrailer(id: number): Promise<string>;
}
