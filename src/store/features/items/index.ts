import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IBaseState} from '../../../shared/interfaces/store/IBaseState';
import {IModel} from '../../../shared/interfaces/IModel';

export interface ItemsState extends IBaseState {
  items: IModel[];
  status: string;
}

const items = createSlice({
  name: 'items',
  initialState: {
    items: [],
    loading: false,
    error: null,
    status: 'start'
  },
  reducers: {
    setItemsLoading(state: ItemsState) {
      state.loading = true;
      state.error = null;
    },
    setItemsSuccess(state: ItemsState, action: PayloadAction<{ items: IModel[]}>) {
      state.items = action.payload.items;
      state.loading = false;
    },
    setItemsError(state: ItemsState, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setStatus(state: ItemsState, action: PayloadAction<string>) {
      state.status = action.payload;
    }
  }
});

export const {
  setItemsLoading,
  setItemsSuccess,
  setItemsError,
  setStatus
} = items.actions;
export default items.reducer;


