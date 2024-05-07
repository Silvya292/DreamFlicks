import { Film } from '../domain/entities/film';
import { Injectable } from '@nestjs/common';
import { FilmRepository } from '../domain/repository/filmRepository';

@Injectable()
export class SearchByTitle {
  constructor(private repository: FilmRepository) {}

  async run(query: string): Promise<Film[]> {
    return this.repository.search(query);
  }
}
