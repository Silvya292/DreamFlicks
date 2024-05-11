import { Module } from '@nestjs/common';
import { ListService } from './infrastructure/list.service';
import { ListController } from './infrastructure/list.controller';
import { ListRepository } from './domain/repository/listRepository';
import { GetLists } from './application/getLists';
import { GetListById } from './application/getListById';
import { CreateList } from './application/createList';
import { MongooseModule } from '@nestjs/mongoose';
import { ListSchema } from './infrastructure/repository/list.schema';
import { UpdateList } from './application/updateList';
import { DeleteListById } from './application/deleteList';
import { MakeListCollaborative } from './application/makeListCollaborative';
import { AddCollaborativeList } from './application/addCollaborativeList';
import { AddItem } from './application/addItem';
import { DeleteItem } from './application/deleteItem';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'List', schema: ListSchema }])],
  controllers: [ListController],
  providers: [
    ListService,
    GetLists,
    GetListById,
    CreateList,
    UpdateList,
    DeleteListById,
    MakeListCollaborative,
    AddCollaborativeList,
    AddItem,
    DeleteItem,
    { provide: ListRepository, useClass: ListService },
  ],
})
export class ListModule {}
