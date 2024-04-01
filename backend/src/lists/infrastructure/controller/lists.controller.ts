import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListsService } from '../../lists.service';
import { List } from '../../interfaces/lists.interface';
import { CreateListDto } from '../../../dto/createList.dto';

@Controller('lists')
export class ListsController {
  constructor(private listsService: ListsService) {}

  @Get('/getLists')
  async getLists(): Promise<List[]> {
    console.log('Returning all the lists');
    return this.listsService.getLists();
  }

  @Post('/createList')
  async createList(@Body() list: CreateListDto): Promise<List> {
    console.log('Creating a new list');
    return this.listsService.createList(list);
  }
}
