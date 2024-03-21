import { Controller, Get } from '@nestjs/common';
import { ListsService } from '../../lists.service';
import { List } from '../../interfaces/lists.interface';

@Controller('lists')
export class ListsController {
  constructor(private listsService: ListsService) {}

  @Get('/getLists')
  async getLists(): Promise<List[]> {
    console.log('Returning all the lists');
    return this.listsService.getLists();
  }
}
