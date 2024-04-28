import { Module } from '@nestjs/common';
import { FilmController } from './infrastructure/film.controller';
import { FilmService } from './infrastructure/film.service';
import { GetFilmById } from './application/getFilmById';

@Module({
  controllers: [FilmController],
  providers: [FilmService, GetFilmById],
})
export class FilmModule {}
