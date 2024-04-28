import { Controller, Get, Param } from '@nestjs/common';
import { GetFilmById } from '../application/getFilmById';

@Controller('film')
export class FilmController {
  constructor(private readonly useCase: GetFilmById) {}

  @Get(':id')
  async getFilmById(@Param('id') id: number) {
    try {
      console.log('Getting film with id', id);
      return await this.useCase.run(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
