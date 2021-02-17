import { AppThunk } from '../../store';
import { IPluginService } from '../../../api/IPluginService';
import { setItemsSuccess } from './index';

export const fetchPlugins = (): AppThunk => async (dispatch) => {
  IPluginService.getPlugins().then(({ data }) =>
    dispatch(setItemsSuccess({ plugins: data.payload }))
  );
};
