import { Injectable } from '@nestjs/common';
import { TvSerieRepository } from '../domain/repository/tvSerieRepository';
import { TvSerie } from '../domain/entities/tvSerie';

@Injectable()
export class SearchByTitle {
  constructor(private repository: TvSerieRepository) {}

  async run(query: string): Promise<TvSerie[]> {
    return this.repository.search(query);
  }
}
