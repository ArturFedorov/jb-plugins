import { combineReducers } from '@reduxjs/toolkit';
import itemsReducer from './features/items/index'

const rootReducer = combineReducers({
  items: itemsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
