import { Controller, Get, Param } from '@nestjs/common';
import { GetFilmById } from '../application/getFilmById';
import { GetPopular } from '../application/getPopular';

@Controller('film')
export class FilmController {
  constructor(
    private readonly filmById: GetFilmById,
    private readonly popular: GetPopular
  ) {}

  @Get('popular')
  async getPopularFilms() {
    try {
      console.log('Getting popular films');
      return await this.popular.run();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':id')
  async getFilmById(@Param('id') id: number) {
    try {
      console.log('Getting film with id', id);
      return await this.filmById.run(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
