import { Controller, Get, Param } from '@nestjs/common';
import { SerieService } from '../../serie.service';

@Controller('tv')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Get(':id')
  async getFilmById(@Param('id') id: number) {
    try {
      console.log('Getting serie');
      return await this.serieService.getSerieById(id);
    } catch (error) {
      return error;
    }
  }
}
