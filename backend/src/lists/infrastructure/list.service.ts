import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';
import fs from 'fs';
import { List } from '../domain/entities/list';
import { CreateListDto } from '../../dto/createList.dto';

@Injectable()
export class ListService implements ListRepository {
  private getJsonData() {
    const data = fs.readFileSync('listData.json', 'utf8');
    return JSON.parse(data);
  }

  async getLists() {
    const data = this.getJsonData();
    const lists: List[] = data.map((item) => {
      return new List(
        item.listId,
        item.title,
        item.description,
        item.image,
        item.owner,
        item.usersAllowed,
        item.isCollaborative,
        item.isShared,
        item.items
      );
    });
    return lists;
  }

  async getListById(id: number) {
    const data = this.getJsonData();
    const list = data.find((item) => item.listId == id);
    return new List(
      list.listId,
      list.title,
      list.description,
      list.image,
      list.owner,
      list.usersAllowed,
      list.isCollaborative,
      list.isShared,
      list.items
    );
  }

  async createList(list: CreateListDto) {
    const data = this.getJsonData();
    const foo = {
      listId: data.length + 1,
      title: list.title,
      description: list.description,
      image: list.image,
      owner: 'admin',
      usersAllowed: [],
      isCollaborative: false,
      isShared: false,
      items: [],
    };
    data.push(foo);
    fs.writeFileSync('listData.json', JSON.stringify(data));
    return new List(
      foo.listId,
      foo.title,
      foo.description,
      foo.image,
      foo.owner,
      foo.usersAllowed,
      foo.isCollaborative,
      foo.isShared,
      foo.items
    );
  }
}
