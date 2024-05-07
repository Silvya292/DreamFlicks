import { Controller, Get, Param } from '@nestjs/common';
import { GetSerieById } from '../application/getSerieById';
import { GetPopular } from '../application/getPopular';
import { SearchByTitle } from '../application/searchByTitle';

@Controller('tv')
export class TvSerieController {
  constructor(
    private readonly serieById: GetSerieById,
    private readonly popular: GetPopular,
    private readonly search: SearchByTitle
  ) {}

  @Get('popular')
  async getPopular() {
    try {
      console.log('Getting popular tv series');
      return await this.popular.run();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':id')
  async getSerieById(@Param('id') id: number) {
    try {
      console.log('Getting tv serie with id', id);
      return await this.serieById.run(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('search/:query')
  async searchByTitle(@Param('query') query: string) {
    try {
      console.log('Searching tv series with query', query);
      return await this.search.run(query);
    } catch (error) {
      throw new Error(error);
    }
  }
}
