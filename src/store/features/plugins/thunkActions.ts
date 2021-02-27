import { AppThunk } from '../../store';
import { PluginService } from '../../../api/PluginService';
import { setPluginsSuccess, setPluginsTotalCount } from './index';
import { INewPlugin } from '../../../shared/interfaces/models/IPlugin';

export const fetchPlugins = (): AppThunk => async (dispatch) => {
  PluginService.getPlugins().then(({ data }) => {
    dispatch(setPluginsSuccess({ plugins: data.payload }));
    dispatch(setPluginsTotalCount(data.total));
  });
};

export const addPlugin = (plugin: INewPlugin): AppThunk => async (dispatch) => {
  PluginService.addPlugin(plugin).then(({ data }) => {
    console.log(data);
  });
};
