import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBaseState } from '../../../shared/interfaces/store/IBaseState';
import { IError } from '../../../shared/interfaces/api/IError';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export interface IPluginState extends IBaseState {
  plugins: IPlugin[];
  status: string;
}

const plugins = createSlice({
  name: 'plugins',
  initialState: {
    plugins: [],
    loading: false,
    error: null,
    status: 'start'
  },
  reducers: {
    setItemsLoading(state: IPluginState) {
      state.loading = true;
      state.error = null;
    },
    setItemsSuccess(state: IPluginState, action: PayloadAction<{ plugins: IPlugin[] }>) {
      state.plugins = action.payload.plugins;
      state.loading = false;
    },
    setItemsError(state: IPluginState, action: PayloadAction<IError>) {
      state.loading = false;
      state.error = action.payload;
    },
    setStatus(state: IPluginState, action: PayloadAction<string>) {
      state.status = action.payload;
    }
  }
});

export const { setItemsLoading, setItemsSuccess, setItemsError, setStatus } = plugins.actions;
export default plugins.reducer;
