import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ListsService } from '../../application/lists.service';
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

  @Get('/getList/:id')
  async getListById(@Param('id') id: number): Promise<List> {
    console.log('Returning the list with id ' + id);
    return this.listsService.getListById(id);
  }

  @Post('/createList')
  async createList(@Body() list: CreateListDto): Promise<List> {
    console.log('Creating a new list');
    return this.listsService.createList(list);
  }
}
