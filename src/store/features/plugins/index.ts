import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export interface IPluginState {
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
    setPluginsSuccess(state: IPluginState, action: PayloadAction<{ plugins: IPlugin[] }>) {
      state.plugins = action.payload.plugins || [];
    },
    setStatus(state: IPluginState, action: PayloadAction<string>) {
      state.status = action.payload;
    }
  }
});

export const { setPluginsSuccess, setStatus } = plugins.actions;
export default plugins.reducer;
