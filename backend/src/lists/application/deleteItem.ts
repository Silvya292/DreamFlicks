import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';
import { ListItem } from '../domain/entities/item.interface';

@Injectable()
export class DeleteItem {
  constructor(private repository: ListRepository) {}

  async run(id: string, itemId: number): Promise<void> {
    return this.repository.deleteItem(id, itemId);
  }
}
