import { Module } from '@nestjs/common';
import { FilmController } from './infrastructure/controller/film.controller';
import { FilmService } from './film.service';

@Module({
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
