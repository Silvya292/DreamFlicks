import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';
import { List } from '../domain/entities/list';
import { CreateListDto } from '../../dto/createList.dto';

@Injectable()
export class CreateList {
  constructor(private repository: ListRepository) {}

  async run(list: CreateListDto): Promise<List> {
    return this.repository.createList(list);
  }
}
