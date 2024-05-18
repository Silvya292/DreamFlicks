import { ListItem } from '../lists/domain/entities/item.interface';

export class CreateListDto {
  listId: string;
  title: string;
  description: string;
  image: string;
  owner: string;
  isShared: boolean;
  items: ListItem[];
}
