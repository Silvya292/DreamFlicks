import { Film } from '../entities/film';

export default interface FilmRepository {
  findById(id: number): Promise<Film>;

  getTrailer(id: number): Promise<string>;
}
