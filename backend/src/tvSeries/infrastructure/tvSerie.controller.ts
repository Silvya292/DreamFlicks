import { Controller, Get, Param } from '@nestjs/common';
import { GetSerieById } from '../application/getSerieById';
import { GetPopular } from '../application/getPopular';

@Controller('tv')
export class TvSerieController {
  constructor(
    private readonly serieById: GetSerieById,
    private readonly popular: GetPopular
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
}
