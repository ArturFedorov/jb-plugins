import { combineReducers } from '@reduxjs/toolkit/';
import pluginsReducer, { IPluginState } from './features/plugins/index';
import baseReducer, { IBaseState } from './features/base';

export interface RootState {
  base: IBaseState;
  plugins: IPluginState;
}

const rootReducer = combineReducers({
  base: baseReducer,
  plugins: pluginsReducer
});

export default rootReducer;
