import { combineReducers } from '@reduxjs/toolkit/';
import pluginsReducer, { IPluginState } from './features/items/index';

export interface RootState {
  plugins: IPluginState;
}

const rootReducer = combineReducers({
  plugins: pluginsReducer
});

export default rootReducer;
