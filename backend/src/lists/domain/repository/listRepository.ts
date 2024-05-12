import { List } from '../entities/list';
import { CreateListDto } from '../../../dto/createList.dto';
import { UpdateListDto } from 'backend/src/dto/updateList.dto';
import { ListItem } from '../entities/item.interface';

export abstract class ListRepository {
  abstract getLists(userId: string): Promise<List[]>;

  abstract getListById(id: string): Promise<List>;

  abstract createList(list: CreateListDto): Promise<List>;

  abstract updateList(id: string, listData: UpdateListDto): Promise<List>;

  abstract deleteListById(id: string): Promise<void>;

  abstract makeListCollaborative(id: string): Promise<void>;

  abstract addCollaborativeList(id: string, userId: string): Promise<void>;

  abstract addItem(id: string, item: ListItem): Promise<void>;

  abstract deleteItem(id: string, itemId: number): Promise<void>;
}
