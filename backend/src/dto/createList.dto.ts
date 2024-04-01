export class CreateListDto {
  listId: number;
  listOwner: string;
  listTitle: string;
  listDescription: string;
  listImage: string;
  isCollaborative: boolean;
  listUsersAllowed: string[];
  listItems: string[];
}
