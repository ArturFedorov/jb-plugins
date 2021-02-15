import { combineReducers } from '@reduxjs/toolkit/';
import itemsReducer, { ItemsState } from './features/items/index';

export interface RootState {
  items: ItemsState;
}

const rootReducer = combineReducers({
  items: itemsReducer
});

export default rootReducer;
