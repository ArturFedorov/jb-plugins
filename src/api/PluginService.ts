import axios from 'axios';
import { IGetPayload } from '../shared/interfaces/api/IGetPayload';
import { INewPlugin, IPlugin } from '../shared/interfaces/models/IPlugin';
import { IPluginQueryParams } from '../shared/interfaces/api/IPluginQueryParams';

export class PluginService {
  /**
   * GET plugins based on query
   * @param params - query params
   * @returns payload object with plugin list and total number
   */
  static getPlugins(params?: IPluginQueryParams) {
    return axios.get<IGetPayload<IPlugin>>('/plugins', {
      params: {
        query: params?.query,
        category: params?.category,
        limit: params?.limit || 100,
        offset: params?.offset || 0
      }
    });
  }

  /**
   * GET single plugin by id
   * @param id - plugin id
   * @returns plugin
   */
  static getPluginById(id: string) {
    return axios.get<IPlugin>(`/plugins/${id}`);
  }

  /**
   * POST Create new plugin
   * @param plugin - reduced number of properties
   * @returns created plugin
   */
  static addPlugin(plugin: INewPlugin) {
    const { name, author, description, icon } = plugin;

    return axios.post<INewPlugin>('/plugins/upload', {
      name,
      author,
      description,
      icon,
      fullDescription: description
    });
  }

  /**
   * DELETE plugin by id
   * @param id - plugin id
   * @returns OK
   */
  static deletePlugin(id: string) {
    return axios.delete(`/plugins/delete/${id}`);
  }
}
