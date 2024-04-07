import { Controller, Get, Param } from '@nestjs/common';
import { FilmService } from '../../film.service';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get(':id')
  async getFilmById(@Param('id') id: number) {
    try {
      console.log('Getting film');
      return await this.filmService.getFilmById(id);
    } catch (error) {
      return error;
    }
  }
}
