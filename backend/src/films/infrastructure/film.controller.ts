import { Controller, Get, Param } from '@nestjs/common';
import { GetFilmById } from '../application/getFilmById';
import { GetPopular } from '../application/getPopular';
import { SearchByTitle } from '../application/searchByTitle';

@Controller('film')
export class FilmController {
  constructor(
    private readonly filmById: GetFilmById,
    private readonly popular: GetPopular,
    private readonly search: SearchByTitle
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

  @Get('search/:query')
  async searchByTitle(@Param('query') query: string) {
    try {
      console.log('Searching films with title', query);
      return await this.search.run(query);
    } catch (error) {
      throw new Error(error);
    }
  }
}
