import { TvSerie } from '../entities/tvSerie';

export abstract class TvSerieRepository {
  abstract getPopular(): Promise<TvSerie[]>;

  abstract findById(id: number): Promise<TvSerie>;

  abstract search(query: string): Promise<TvSerie[]>;
}
