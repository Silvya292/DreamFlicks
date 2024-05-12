import { Injectable } from '@nestjs/common';
import { ListRepository } from '../domain/repository/listRepository';

@Injectable()
export class AddCollaborativeList {
  constructor(private repository: ListRepository) {}

  async run(id: string, userId: string): Promise<void> {
    return this.repository.addCollaborativeList(id, userId);
  }
}
