import { Injectable } from '@nestjs/common';
import { List } from '../domain/entities/list';
import { ListRepository } from '../domain/repository/listRepository';

@Injectable()
export class GetListById {
  constructor(private repository: ListRepository) {}

  async run(id: number): Promise<List> {
    return this.repository.getListById(id);
  }
}
