import { Module } from '@nestjs/common';
import { TvSerieController } from './infrastructure/tvSerie.controller';
import { TvSerieService } from './infrastructure/tvSerie.service';
import { GetSerieById } from './application/getSerieById';
import { TvSerieRepository } from './domain/repository/tvSerieRepository';
import { GetPopular } from './application/getPopular';
import { SearchByTitle } from './application/searchByTitle';

@Module({
  controllers: [TvSerieController],
  providers: [
    TvSerieService,
    GetSerieById,
    GetPopular,
    SearchByTitle,
    { provide: TvSerieRepository, useClass: TvSerieService },
  ],
})
export class TvSerieModule {}
