import { IPluginState } from './index';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export const getPlugins = (state: IPluginState): IPlugin[] => state.plugins;
export const getStatus = (state: IPluginState): string => state.status;
export const getLoadingStatus = (state: IPluginState) => state.loading;
export const getError = (state: IPluginState) => state.error;
