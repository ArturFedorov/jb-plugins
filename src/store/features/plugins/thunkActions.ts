import { AppThunk } from '../../store';
import { IPluginService } from '../../../api/IPluginService';
import { setPluginsSuccess } from './index';

export const fetchPlugins = (): AppThunk => async (dispatch) => {
  IPluginService.getPlugins().then(({ data }) =>
    dispatch(setPluginsSuccess({ plugins: data.payload }))
  );
};
