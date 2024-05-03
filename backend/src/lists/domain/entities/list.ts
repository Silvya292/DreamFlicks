import { ListItem } from './item.interface';

export class List {
  readonly listId: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly owner: string;
  readonly usersAllowed: string[];
  readonly items?: ListItem[];
  readonly isCollaborative: boolean;
  readonly isShared: boolean;

  constructor(
    listId: number,
    listTitle: string,
    listDescription: string,
    listImage: string,
    listOwner: string,
    usersAllowed: string[],
    isCollaborative: boolean,
    isShared: boolean,
    listItems?: ListItem[]
  ) {
    this.listId = listId;
    this.title = listTitle;
    this.description = listDescription;
    this.image = listImage;
    this.owner = listOwner;
    this.usersAllowed = usersAllowed;
    this.isCollaborative = isCollaborative;
    this.isShared = isShared;
    this.items = listItems;
  }
}
