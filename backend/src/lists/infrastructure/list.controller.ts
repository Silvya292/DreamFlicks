import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { List } from '../domain/entities/list';
import { ListService } from './list.service';
import { CreateListDto } from '../../dto/createList.dto';

@Controller('list')
export class ListController {
  constructor(private listsService: ListService) {}

  @Get('/getLists')
  async getLists(): Promise<List[]> {
    try {
      console.log('Returning all the lists');
      return this.listsService.getLists();
    } catch (error) {
      throw new Error('No lists found');
    }
  }

  @Get('/:id')
  async getListById(@Param('id') id: number): Promise<List> {
    try {
      console.log('Returning a list by id');
      return this.listsService.getListById(id);
    } catch (error) {
      throw new Error(`List with id ${id} not found`);
    }
  }

  @Post('/createList')
  async createList(@Body() list: CreateListDto): Promise<List> {
    try {
      console.log('Creating a new list');
      return this.listsService.createList(list);
    } catch (error) {
      throw new Error('Error creating list');
    }
  }
}
