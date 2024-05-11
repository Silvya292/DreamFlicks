import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { List } from '../domain/entities/list';
import { CreateListDto } from '../../dto/createList.dto';
import { CreateList } from '../application/createList';
import { GetLists } from '../application/getLists';
import { GetListById } from '../application/getListById';
import { UpdateListDto } from 'backend/src/dto/updateList.dto';
import { UpdateList } from '../application/updateList';
import { DeleteListById } from '../application/deleteList';
import { MakeListCollaborative } from '../application/makeListCollaborative';
import { AddCollaborativeList } from '../application/addCollaborativeList';
import { ListItem } from '../domain/entities/item.interface';
import { AddItem } from '../application/addItem';
import { DeleteItem } from '../application/deleteItem';

@Controller('list')
export class ListController {
  constructor(
    private getAllLists: GetLists,
    private getList: GetListById,
    private createList: CreateList,
    private updateListData: UpdateList,
    private deleteList: DeleteListById,
    private makeCollaborative: MakeListCollaborative,
    private addCollaborative: AddCollaborativeList,
    private addItem: AddItem,
    private deleteItem: DeleteItem
  ) {}

  @Get('/getLists')
  async getLists(@Query('userId') userId: string): Promise<List[]> {
    try {
      console.log('Returning all the lists of user', userId);
      return await this.getAllLists.run(userId);
    } catch (error) {
      throw new Error('No lists found');
    }
  }

  @Get('/:id')
  async getListById(@Param('id') id: number): Promise<List> {
    try {
      console.log('Returning list with id', id);
      return await this.getList.run(id);
    } catch (error) {
      throw new Error(`List with id ${id} not found`);
    }
  }

  @Post('/saveList')
  async saveList(@Body() list: CreateListDto): Promise<List> {
    try {
      console.log('Creating a new list');
      return await this.createList.run(list);
    } catch (error) {
      throw new Error('Error saving list');
    }
  }

  @Patch('/update/:id')
  async updateList(
    @Param('id') id: number,
    @Body() listData: UpdateListDto
  ): Promise<List> {
    try {
      console.log('Updating list with id', id);
      return await this.updateListData.run(id, listData);
    } catch (error) {
      throw new Error(`Error updating list with id ${id}`);
    }
  }

  @Delete('/delete/:id')
  async deleteListById(@Param('id') id: number): Promise<void> {
    try {
      console.log('Deleting list with id', id);
      return await this.deleteList.run(id);
    } catch (error) {
      throw new Error(`Error deleting list with id ${id}`);
    }
  }

  @Patch('/makeCollaborative/:id')
  async makeListCollaborative(@Param('id') id: number): Promise<void> {
    try {
      console.log('Making list with id', id, 'collaborative');
      await this.makeCollaborative.run(id);
    } catch (error) {
      throw new Error(`Error making list with id ${id} collaborative`);
    }
  }

  @Patch('/addCollaborative/:id')
  async addCollaborativeList(
    @Param('id') id: number,
    @Body('userId') userId: string
  ): Promise<void> {
    try {
      console.log('Adding user', userId, 'to collaborative list with id', id);
      await this.addCollaborative.run(id, userId);
    } catch (error) {
      throw new Error(`Error adding user ${userId} to list with id ${id}`);
    }
  }

  @Patch('/addItem/:id')
  async addItemToList(
    @Param('id') id: number,
    @Body() item: ListItem
  ): Promise<void> {
    try {
      console.log('Adding an item to list with id', id);
      this.addItem.run(id, item);
    } catch (error) {
      throw new Error(`Error adding item to list with id ${id}`);
    }
  }

  @Patch('/deleteItem/:id')
  async deleteItemFromList(
    @Param('id') id: number,
    @Body() itemId: number
  ): Promise<void> {
    try {
      console.log('Deleting an item from list with id', id);
      this.deleteItem.run(id, itemId);
    } catch (error) {
      throw new Error(`Error deleting item from list with id ${id}`);
    }
  }
}
