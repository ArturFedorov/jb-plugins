import { IPlugin } from '../interfaces/models/IPlugin';

export class DefaultsUtil {
  static defaultPlugin: IPlugin = {
    name: '',
    author: '',
    downloads: 0,
    date: new Date().toString(),
    icon: '',
    rating: 0,
    id: '',
    description: '',
    fullDescription: ''
  };
}
