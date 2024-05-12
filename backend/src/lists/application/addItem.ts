import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';
import { ListItem } from '../domain/entities/item.interface';

@Injectable()
export class AddItem {
  constructor(private repository: ListRepository) {}

  async run(id: string, item: ListItem): Promise<void> {
    return this.repository.addItem(id, item);
  }
}
