import { Injectable } from '@nestjs/common';
import { TvSerieRepository } from '../domain/repository/tvSerieRepository';
import { TvSerie } from '../domain/entities/tvSerie';

@Injectable()
export class GetPopular {
  constructor(private repository: TvSerieRepository) {}

  async run(): Promise<TvSerie[]> {
    return await this.repository.getPopular();
  }
}
