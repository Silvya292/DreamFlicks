import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';

@Injectable()
export class MakeListCollaborative {
  constructor(private repository: ListRepository) {}

  async run(id: string, userName: string, url: string): Promise<void> {
    return this.repository.makeListCollaborative(id, userName, url);
  }
}
