import { Module } from '@nestjs/common';
import { TvSerieController } from './infrastructure/tvSerie.controller';
import { TvSerieService } from './infrastructure/tvSerie.service';
import { GetSerieById } from './application/getSerieById';
import { TvSerieRepository } from './domain/repository/tvSerieRepository';

@Module({
  controllers: [TvSerieController],
  providers: [
    TvSerieService,
    GetSerieById,
    { provide: TvSerieRepository, useClass: TvSerieService },
  ],
})
export class TvSerieModule {}
