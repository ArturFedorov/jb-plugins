import axios from 'axios';
import { IGetPayload } from '../shared/interfaces/api/IGetPayload';
import { IPlugin } from '../shared/interfaces/models/IPlugin';

export class IPluginService {
  static getPlugins() {
    return axios.get<IGetPayload<IPlugin>>('/api/plugins');
  }
}
