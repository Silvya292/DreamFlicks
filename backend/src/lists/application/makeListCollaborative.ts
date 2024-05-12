import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';

@Injectable()
export class MakeListCollaborative {
  constructor(private repository: ListRepository) {}

  async run(id: string): Promise<void> {
    return this.repository.makeListCollaborative(id);
  }
}