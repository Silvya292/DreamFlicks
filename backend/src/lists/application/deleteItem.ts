import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';

@Injectable()
export class DeleteItem {
  constructor(private repository: ListRepository) {}

  async run(id: string, itemId: number): Promise<void> {
    return this.repository.deleteItem(id, itemId);
  }
}
