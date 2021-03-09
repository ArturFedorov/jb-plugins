import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export interface IPluginState {
  plugins: IPlugin[];
  latestPlugins: IPlugin[];
  popularPlugins: IPlugin[];
  plugin: IPlugin;
  pluginDeletedSuccess: boolean;
  pluginDeletedFailed: boolean;
  showPluginModal: boolean;
  pluginUploadMessage: string;
  pluginsTotalCount: number;
  searchValue: string;
}

const plugins = createSlice({
  name: 'plugins',
  initialState: {
    plugins: [],
    pluginDeletedSuccess: false,
    pluginDeletedFailed: false,
    latestPlugins: [],
    popularPlugins: [],
    plugin: { date: new Date().toString(), downloads: 0, icon: '' } as IPlugin,
    searchValue: '',
    showPluginModal: false,
    pluginUploadMessage: '',
    pluginsTotalCount: 0
  },
  reducers: {
    setPlugins(state: IPluginState, action: PayloadAction<{ plugins: IPlugin[] }>) {
      state.plugins = action.payload.plugins || [];
    },
    setLatestPlugins(state: IPluginState, action: PayloadAction<{ plugins: IPlugin[] }>) {
      state.latestPlugins = action.payload.plugins || [];
    },
    setPopularPlugins(state: IPluginState, action: PayloadAction<{ plugins: IPlugin[] }>) {
      state.popularPlugins = action.payload.plugins || [];
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
    },
    setPluginDeletedSuccess(state: IPluginState, action: PayloadAction<boolean>) {
      state.pluginDeletedSuccess = action.payload;
    },
    setPluginDeletedFailed(state: IPluginState, action: PayloadAction<boolean>) {
      state.pluginDeletedFailed = action.payload;
    }
  }
});

export const {
  setPlugins,
  setPopularPlugins,
  setLatestPlugins,
  setPlugin,
  setPluginDeletedSuccess,
  setPluginDeletedFailed,
  setPluginUploadMessage,
  setSearchValue,
  setPluginsTotalCount,
  setShowPluginModal
} = plugins.actions;
export default plugins.reducer;
