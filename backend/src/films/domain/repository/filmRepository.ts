import { Film } from '../entities/film';

export abstract class FilmRepository {
  abstract getPopular(): Promise<Film[]>;

  abstract findById(id: number): Promise<Film>;

  abstract search(query: string): Promise<Film[]>;
}
