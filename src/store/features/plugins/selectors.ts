import { IPluginState } from './index';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { SortingUtil } from '../../../shared/utils/sorting.util';

export const getPlugins = (state: IPluginState): IPlugin[] => state.plugins;
export const getTotalPluginCount = (state: IPluginState): number => state.plugins.length;
export const getSearchValue = (state: IPluginState): string => state.searchValue;
export const getMostPopularPlugins = (state: IPluginState): IPlugin[] =>
  SortingUtil.sortArrayBy<IPlugin>(state.plugins, 'downloads', false).slice(0, 6);
export const getLatestPlugins = (state: IPluginState): IPlugin[] =>
  SortingUtil.sortArrayBy<IPlugin>(state.plugins, 'date', false).slice(0, 6);
