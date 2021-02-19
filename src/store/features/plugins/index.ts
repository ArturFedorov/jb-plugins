import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export interface IPluginState {
  plugins: IPlugin[];
  searchValue: string;
}

const plugins = createSlice({
  name: 'plugins',
  initialState: {
    plugins: [],
    searchValue: ''
  },
  reducers: {
    setPluginsSuccess(state: IPluginState, action: PayloadAction<{ plugins: IPlugin[] }>) {
      state.plugins = action.payload.plugins || [];
    },
    setSearchValue(state: IPluginState, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    }
  }
});

export const { setPluginsSuccess, setSearchValue } = plugins.actions;
export default plugins.reducer;
