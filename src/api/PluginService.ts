import axios from 'axios';
import { IGetPayload } from '../shared/interfaces/api/IGetPayload';
import { INewPlugin, IPlugin } from '../shared/interfaces/models/IPlugin';

export class PluginService {
  static getPlugins() {
    return axios.get<IGetPayload<IPlugin>>('/api/plugins');
  }

  static addPlugin(plugin: INewPlugin) {
    return axios.post<IGetPayload<IPlugin>>('/api/plugins/add', plugin);
  }
}
