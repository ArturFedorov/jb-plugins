import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '../../../shared/interfaces/api/IError';

export interface IBaseState {
  loading: boolean;
  error: IError | null;
}

const base = createSlice({
  name: 'base',
  initialState: {
    loading: false,
    error: null
  },
  reducers: {
    setLoading(state: IBaseState, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.error = null;
      }
      state.loading = action.payload;
    },
    setError(state: IBaseState, action: PayloadAction<IError>) {
      state.error = action.payload;
    }
  }
});

export const { setLoading, setError } = base.actions;
export default base.reducer;
