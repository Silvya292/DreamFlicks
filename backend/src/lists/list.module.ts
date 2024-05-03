import { Module } from '@nestjs/common';
import { ListService } from './infrastructure/list.service';
import { ListController } from './infrastructure/list.controller';
import { ListRepository } from './domain/repository/listRepository';
import { GetLists } from './application/getLists';
import { GetListById } from './application/getListById';
import { CreateList } from './application/createList';

@Module({
  controllers: [ListController],
  providers: [
    ListService,
    GetLists,
    GetListById,
    CreateList,
    { provide: ListRepository, useClass: ListService },
  ],
})
export class ListModule {}
