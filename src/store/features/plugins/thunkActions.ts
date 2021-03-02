import { AppThunk } from '../../store';
import { PluginService } from '../../../api/PluginService';
import { INewPlugin } from '../../../shared/interfaces/models/IPlugin';
import {
  setPluginsSuccess,
  setPluginsTotalCount,
  setPluginUploadMessage,
  setShowPluginModal
} from './index';

export const fetchPlugins = (): AppThunk => async (dispatch) => {
  PluginService.getPlugins().then(({ data }) => {
    dispatch(setPluginsSuccess({ plugins: data.payload }));
    dispatch(setPluginsTotalCount(data.total));
  });
};

export const addPlugin = (plugin: INewPlugin): AppThunk => (dispatch) => {
  dispatch(setShowPluginModal(true));
  dispatch(setPluginUploadMessage('Plugin upload started. Waiting for response from server'));
  return PluginService.addPlugin(plugin).then(({ data }) => {
    console.log(data);
  });
};
