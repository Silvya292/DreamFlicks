import { List } from '../entities/list';
import { CreateListDto } from '../../../dto/createList.dto';

export abstract class ListRepository {
  abstract getLists(): Promise<List[]>;

  abstract getListById(id: number): Promise<List>;

  abstract createList(list: CreateListDto): Promise<List>;
}
