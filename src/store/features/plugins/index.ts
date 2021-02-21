import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export interface IPluginState {
  plugins: IPlugin[];
  pluginsTotalCount: number;
  searchValue: string;
}

const plugins = createSlice({
  name: 'plugins',
  initialState: {
    plugins: [],
    searchValue: '',
    pluginsTotalCount: 0
  },
  reducers: {
    setPluginsSuccess(state: IPluginState, action: PayloadAction<{ plugins: IPlugin[] }>) {
      state.plugins = action.payload.plugins || [];
    },
    setPluginsTotalCount(state: IPluginState, action: PayloadAction<number>) {
      state.pluginsTotalCount = action.payload;
    },
    setSearchValue(state: IPluginState, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    }
  }
});

export const { setPluginsSuccess, setSearchValue, setPluginsTotalCount } = plugins.actions;
export default plugins.reducer;
