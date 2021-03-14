import axios from 'axios';
import { IGetPayload } from '../shared/interfaces/api/IGetPayload';
import { INewPlugin, IPlugin } from '../shared/interfaces/models/IPlugin';
import { IPluginQueryParams } from '../shared/interfaces/api/IPluginQueryParams';

// TODO refactor with configuration
const apiPrefix = process.env.REACT_APP_API_PREFIX;
const urlWithPrefix = (url: string) => `${apiPrefix}${url}`;

export class PluginService {
  /**
   * GET plugins based on query
   * @param params - query params
   * @returns payload object with plugin list and total number
   */
  static getPlugins(params?: IPluginQueryParams) {
    return axios.get<IGetPayload<IPlugin>>(urlWithPrefix('/plugins'), {
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
    return axios.get<IPlugin>(urlWithPrefix(`/plugins/${id}`));
  }

  /**
   * POST Create new plugin
   * @param plugin - reduced number of properties
   * @returns created plugin
   */
  static addPlugin(plugin: INewPlugin) {
    const { name, author, description, icon } = plugin;

    return axios.post<INewPlugin>(urlWithPrefix('/plugins/upload'), {
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
    return axios.delete(urlWithPrefix(`/plugins/delete/${id}`));
  }
}
