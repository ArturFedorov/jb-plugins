import axios from "axios";

export class ItemsService {
  static getItems() {
    return axios.get('/api/items');
  }
}
