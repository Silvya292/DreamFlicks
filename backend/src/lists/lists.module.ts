import { Module } from '@nestjs/common';
import { ListsController } from './infrastructure/controller/lists.controller';
import { ListsService } from './lists.service';

@Module({
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
