export interface IPlugin {
  [key: string]: string | number;
  id: string;
  name: string;
  downloads: number;
  date: string;
  author: string;
  rating: number;
  description: string;
  icon: string;
  fullDescription: string;
}

export type INewPlugin = Pick<
  IPlugin,
  'name' | 'author' | 'description' | 'icon' | 'fullDescription'
>;
