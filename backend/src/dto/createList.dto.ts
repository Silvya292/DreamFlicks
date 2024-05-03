interface ListItem {
  itemId: number;
  itemRate?: Array<number>;
}

export class CreateListDto {
  title: string;
  description: string;
  image: string;
  items?: ListItem[];
}
