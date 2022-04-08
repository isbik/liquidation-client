export interface CloudFile {
  id: number;
  filename: string;
  url: string;
  mimetype: string;
  key: string;
  owner: number;
  active: boolean;
}

export type Paginated<T> = {
  items: T[];
  total: number;
};

export type Category = {
  id: number;
  name: string;
  parentCategory: Category;
  image: CloudFile | null;
};
