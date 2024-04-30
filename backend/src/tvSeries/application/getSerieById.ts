import { Injectable } from '@nestjs/common';
import { TvSerieRepository } from '../domain/repository/tvSerieRepository';
import { TvSerie } from '../domain/entities/tvSerie';

@Injectable()
export class GetSerieById {
  constructor(private repository: TvSerieRepository) {}

  async run(id: number): Promise<TvSerie> {
    const tvSerie = await this.repository.findById(id);
    tvSerie.trailer = await this.repository.getTrailer(tvSerie.id);

    return tvSerie;
  }
}
