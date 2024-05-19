import { Injectable } from '@nestjs/common';
import { TvSerieRepository } from '../domain/repository/tvSerieRepository';
import { TvSerie } from '../domain/entities/tvSerie';

@Injectable()
export class GetSerieById {
  constructor(private repository: TvSerieRepository) {}

  async run(id: number): Promise<TvSerie> {
    return await this.repository.findById(id);
  }
}
