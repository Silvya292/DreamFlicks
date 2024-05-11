import { List } from '../entities/list';
import { CreateListDto } from '../../../dto/createList.dto';
import { UpdateListDto } from 'backend/src/dto/updateList.dto';
import { ListItem } from '../entities/item.interface';

export abstract class ListRepository {
  abstract getLists(userId: string): Promise<List[]>;

  abstract getListById(id: number): Promise<List>;

  abstract createList(list: CreateListDto): Promise<List>;

  abstract updateList(id: number, listData: UpdateListDto): Promise<List>;

  abstract deleteListById(id: number): Promise<void>;

  abstract makeListCollaborative(id: number): Promise<void>;

  abstract addCollaborativeList(id: number, userId: string): Promise<void>;

  abstract addItem(id: number, item: ListItem): Promise<void>;

  abstract deleteItem(id: number, itemId: number): Promise<void>;
}
