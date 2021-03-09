import { IPluginState } from './index';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export const getPlugins = (state: IPluginState): IPlugin[] => state.plugins;
export const getPlugin = (state: IPluginState): IPlugin => state.plugin;
export const getTotalPluginCount = (state: IPluginState): number => state.pluginsTotalCount;
export const getSearchValue = (state: IPluginState): string => state.searchValue;
export const getShowPluginModal = (state: IPluginState): boolean => state.showPluginModal;
export const gePluginUploadMessage = (state: IPluginState): string => state.pluginUploadMessage;
export const getMostPopularPlugins = (state: IPluginState): IPlugin[] => state.popularPlugins;
export const getLatestPlugins = (state: IPluginState): IPlugin[] => state.latestPlugins;
export const getPluginDeletedSuccess = (state: IPluginState): boolean => state.pluginDeletedSuccess;
export const getPluginDeletedFailed = (state: IPluginState): boolean => state.pluginDeletedFailed;
