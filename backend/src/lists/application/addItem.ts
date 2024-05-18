import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';
import { ListItem } from '../domain/entities/item.interface';

@Injectable()
export class AddItem {
  constructor(private repository: ListRepository) {}

  async run(id: string, item: ListItem): Promise<void> {
    const list = await this.repository.getListById(id);
    if (list.items.find((element) => element.id === item.id)) {
      throw new Error('Item already exists in list');
    }
    return this.repository.addItem(id, item);
  }
}
