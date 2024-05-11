export interface ListItem {
  id: number;
  type: string;
  rate?: Array<Rate>;
}

interface Rate {
  userId: string;
  rate: number;
}
