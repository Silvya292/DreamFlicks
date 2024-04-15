export interface List {
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

export interface ListItem {
  itemId: number;
  itemRate?: number;
}
