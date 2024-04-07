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
}
