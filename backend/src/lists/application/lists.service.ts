import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { List } from '../interfaces/lists.interface';

@Injectable()
export class ListsService {
  private getJsonData() {
    const data = fs.readFileSync('listData.json', 'utf8');
    return JSON.parse(data);
  }

  getLists() {
    const data = this.getJsonData();
    const lists: List[] = data.map((item) => {
      return {
        listId: item.listId,
        listTitle: item.listTitle,
        listDescription: item.listDescription,
        listImage: item.listImage,
        isCollaborative: item.isCollaborative,
      };
    });
    return lists;
  }

  getListById(id: number) {
    const data = this.getJsonData();
    const list = data.find((item) => item.listId == id);
    return {
      listId: list.listId,
      listTitle: list.listTitle,
      listDescription: list.listDescription,
      listImage: list.listImage,
      listOwner: list.listOwner,
      usersAllowed: list.usersAllowed,
      listItems: list.listItems || [],
      isCollaborative: list.isCollaborative,
      isShared: list.isShared,
    };
  }

  createList(list: List) {
    const data = this.getJsonData();
    data.push(list);
    fs.writeFileSync('listData.json', JSON.stringify(data));
    return list;
  }
}
