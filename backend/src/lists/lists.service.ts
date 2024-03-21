import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { List } from './interfaces/lists.interface';

@Injectable()
export class ListsService {
  private readonly jsonData = fs.readFileSync('listData.json', 'utf8');

  getLists() {
    const data = JSON.parse(this.jsonData);
    const lists: List[] = data.map((item) => {
      return {
        listTitle: item.listTitle,
        listDescription: item.listDescription,
        listImage: item.listImage,
      };
    });
    return lists;
  }
}
