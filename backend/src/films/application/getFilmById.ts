import { Film } from '../domain/entities/film';
import { Injectable } from '@nestjs/common';
import { FilmRepository } from '../domain/repository/filmRepository';

@Injectable()
export class GetFilmById {
  constructor(private repository: FilmRepository) {}

  async run(id: number): Promise<Film> {
    const film = await this.repository.findById(id);
    film.trailer = await this.repository.getTrailer(film.id);

    return film;
  }
}
