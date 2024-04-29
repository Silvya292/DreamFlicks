import { Film } from '../domain/entities/film';
import { Injectable } from '@nestjs/common';
import { FilmRepository } from '../domain/repository/filmRepository';

@Injectable()
export class GetPopular {
  constructor(private repository: FilmRepository) {}

  async run(): Promise<Film[]> {
    return await this.repository.getPopular();
  }
}
