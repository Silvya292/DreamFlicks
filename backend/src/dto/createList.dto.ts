import { ListItem } from '../lists/interfaces/lists.interface';

export class CreateListDto {
  listId: number;
  listTitle: string;
  listDescription: string;
  listImage: string;
  listOwner: string;
  usersAllowed: string[];
  listItems?: ListItem[];
  isCollaborative: boolean;
  isShared: boolean;
}
