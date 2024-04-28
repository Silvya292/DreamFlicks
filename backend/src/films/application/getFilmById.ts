import { Film } from '../domain/entities/film';
import { Injectable } from '@nestjs/common';
import { FilmService } from '../infrastructure/film.service';

@Injectable()
export class GetFilmById {
  constructor(private repository: FilmService) {}

  async run(id: number): Promise<Film> {
    const film = await this.repository.findById(id);
    film.trailer = await this.repository.getTrailer(film.id);

    if (film.trailer === null) {
      film.trailer = 'No trailer available';
    }

    if (!film) {
      throw new Error('Film not found');
    }

    return film;
  }
}
