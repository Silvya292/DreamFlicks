export class CreateListDto {
  listId: number;
  title: string;
  description: string;
  image: string;
  owner: string;
  isShared: boolean;
}
