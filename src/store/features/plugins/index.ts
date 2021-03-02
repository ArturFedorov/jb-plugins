import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export interface IPluginState {
  plugins: IPlugin[];
  plugin: IPlugin;
  showPluginModal: boolean;
  pluginUploadMessage: string;
  pluginsTotalCount: number;
  searchValue: string;
}

const plugins = createSlice({
  name: 'plugins',
  initialState: {
    plugins: [],
    plugin: { date: new Date().toString(), downloads: 0, icon: '' } as IPlugin,
    searchValue: '',
    showPluginModal: false,
    pluginUploadMessage: '',
    pluginsTotalCount: 0
  },
  reducers: {
    setPluginsSuccess(state: IPluginState, action: PayloadAction<{ plugins: IPlugin[] }>) {
      state.plugins = action.payload.plugins || [];
    },
    setPlugin(state: IPluginState, action: PayloadAction<IPlugin>) {
      state.plugin = { ...state.plugin, ...action.payload };
    },
    setPluginsTotalCount(state: IPluginState, action: PayloadAction<number>) {
      state.pluginsTotalCount = action.payload;
    },
    setSearchValue(state: IPluginState, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setShowPluginModal(state: IPluginState, action: PayloadAction<boolean>) {
      state.showPluginModal = action.payload;
    },
    setPluginUploadMessage(state: IPluginState, action: PayloadAction<string>) {
      state.pluginUploadMessage = action.payload;
    }
  }
});

export const {
  setPluginsSuccess,
  setPlugin,
  setPluginUploadMessage,
  setSearchValue,
  setPluginsTotalCount,
  setShowPluginModal
} = plugins.actions;
export default plugins.reducer;
