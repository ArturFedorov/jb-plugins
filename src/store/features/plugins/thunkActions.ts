import { AppThunk } from '../../store';
import { PluginService } from '../../../api/PluginService';
import { DefaultsUtil } from '../../../shared/utils/defaults.util';
import { INewPlugin } from '../../../shared/interfaces/models/IPlugin';
import { IPluginQueryParams } from '../../../shared/interfaces/api/IPluginQueryParams';
import {
  setLatestPlugins,
  setPlugin,
  setPluginDeletedFailed,
  setPluginDeletedSuccess,
  setPlugins,
  setPluginsTotalCount,
  setPluginUploadMessage,
  setPopularPlugins,
  setShowPluginModal
} from './index';

export const fetchPlugins = (params?: IPluginQueryParams): AppThunk => (dispatch) => {
  PluginService.getPlugins(params).then(({ data }) => {
    dispatch(setPlugins({ plugins: data.payload }));
  });
};

export const fetchPlugin = (id: string): AppThunk => (dispatch) => {
  PluginService.getPluginById(id).then(({ data }) => {
    dispatch(setPlugin(data));
  });
};

export const fetchLatestPlugins = (): AppThunk => (dispatch) => {
  PluginService.getPlugins({ category: 'latest', limit: 9 }).then(({ data }) => {
    dispatch(setLatestPlugins({ plugins: data.payload }));
    dispatch(setPluginsTotalCount(data.total));
  });
};

export const fetchPopularPlugins = (): AppThunk => (dispatch) => {
  PluginService.getPlugins({ category: 'popular', limit: 9 }).then(({ data }) => {
    dispatch(setPopularPlugins({ plugins: data.payload }));
  });
};

export const deletePlugin = (id: string): AppThunk => (dispatch) => {
  PluginService.deletePlugin(id)
    .then(() => dispatch(setPluginDeletedSuccess(true)))
    .catch(() => dispatch(setPluginDeletedFailed(true)));
};

export const addPlugin = (plugin: INewPlugin): AppThunk => (dispatch) => {
  dispatch(setShowPluginModal(true));
  dispatch(setPluginUploadMessage('Plugin upload started. Waiting for response from server'));

  return PluginService.addPlugin(plugin)
    .then(() => {
      dispatch(setPlugin(DefaultsUtil.defaultPlugin));
      dispatch(setPluginUploadMessage('Plugin was loaded successfully'));
    })
    .catch((error) => dispatch(setPluginUploadMessage(error.message)));
};
