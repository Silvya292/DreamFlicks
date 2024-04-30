import { Controller, Get, Param } from '@nestjs/common';
import { GetSerieById } from '../application/getSerieById';

@Controller('tv')
export class TvSerieController {
  constructor(private readonly serieById: GetSerieById) {}

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
