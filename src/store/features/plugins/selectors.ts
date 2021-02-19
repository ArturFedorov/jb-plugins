import { IPluginState } from './index';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export const getPlugins = (state: IPluginState): IPlugin[] => state.plugins;
export const getSearchValue = (state: IPluginState): string => state.searchValue;
