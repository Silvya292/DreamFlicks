import { Injectable } from '@nestjs/common';
import { List } from '../domain/entities/list';
import { ListRepository } from '../domain/repository/listRepository';

@Injectable()
export class GetLists {
  constructor(private repository: ListRepository) {}

  async run(userId: string): Promise<List[]> {
    return await this.repository.getLists(userId);
  }
}
