import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { List } from './interfaces/lists.interface';

@Injectable()
export class ListsService {
  getLists() {
    const jsonData = fs.readFileSync('listData.json', 'utf8');
    const data = JSON.parse(jsonData);
    const lists: List[] = data.map((item) => {
      return {
        listTitle: item.listTitle,
        listDescription: item.listDescription,
        listImage: item.listImage,
        isCollaborative: item.isCollaborative,
      };
    });
    return lists;
  }

  createList(list: List) {
    const jsonData = fs.readFileSync('listData.json', 'utf8');
    const data = JSON.parse(jsonData);
    data.push(list);
    fs.writeFileSync('listData.json', JSON.stringify(data));
    return list;
  }
}
