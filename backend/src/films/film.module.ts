import { Module } from '@nestjs/common';
import { FilmController } from './infrastructure/film.controller';
import { FilmService } from './infrastructure/film.service';
import { GetFilmById } from './application/getFilmById';
import { FilmRepository } from './domain/repository/filmRepository';
import { GetPopular } from './application/getPopular';
import { SearchByTitle } from './application/searchByTitle';

@Module({
  controllers: [FilmController],
  providers: [
    FilmService,
    GetFilmById,
    GetPopular,
    SearchByTitle,
    { provide: FilmRepository, useClass: FilmService },
  ],
})
export class FilmModule {}
