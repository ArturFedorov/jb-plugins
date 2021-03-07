import axios from 'axios';
import { IGetPayload } from '../shared/interfaces/api/IGetPayload';
import { INewPlugin, IPlugin } from '../shared/interfaces/models/IPlugin';
import { IPluginQueryParams } from '../shared/interfaces/api/IPluginQueryParams';

export class PluginService {
  static getPlugins(params?: IPluginQueryParams) {
    return axios.get<IGetPayload<IPlugin>>('/plugins', {
      params: {
        query: params?.query,
        code: params?.code,
        limit: params?.limit || 100,
        offset: params?.offset || 0
      }
    });
  }

  static getPluginById(id: string) {
    return axios.get<IPlugin>(`/plugins/${id}`);
  }

  static addPlugin(plugin: INewPlugin) {
    const { name, author, description, icon, fullDescription } = plugin;

    return axios.post<INewPlugin>('/plugins/upload', {
      name,
      author,
      description,
      icon,
      fullDescription
    });
  }

  static deletePlugin(id: string) {
    return axios.delete(`/plugins/delete/${id}`);
  }
}
