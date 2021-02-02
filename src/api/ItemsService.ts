import axios from "axios";
import {IModel} from '../shared/interfaces/IModel';

export class ItemsService {
  static getItems() {
    return axios.get<IModel[]>('/api/items');
  }
}
