import { Controller, Get } from '@nestjs/common';
import { PopularService } from '../../popular.service';

@Controller('popular')
export class PopularController {
  constructor(private readonly popularService: PopularService) {}

  @Get('/getPopularFilms')
  async getPopularFilms() {
    try {
      console.log('Getting popular films');
      return await this.popularService.getPopularFilms();
    } catch (error) {
      return error;
    }
  }

  @Get('/getPopularTV')
  async getPopularTV() {
    try {
      console.log('Getting popular series');
      return await this.popularService.getPopularTV();
    } catch (error) {
      return error;
    }
  }
}
