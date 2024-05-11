import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';
import { UpdateListDto } from 'backend/src/dto/updateList.dto';
import { List } from '../domain/entities/list';

@Injectable()
export class UpdateList {
  constructor(private repository: ListRepository) {}

  async run(id: number, data: UpdateListDto): Promise<List> {
    return this.repository.updateList(id, data);
  }
}
