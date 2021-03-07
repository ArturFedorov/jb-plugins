import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '../../../shared/interfaces/api/IError';

export interface IBaseState {
  loading: boolean;
  error: IError | undefined;
}

const base = createSlice({
  name: 'base',
  initialState: {
    loading: false,
    error: undefined
  },
  reducers: {
    setLoading(state: IBaseState, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.error = undefined;
      }
      state.loading = action.payload;
    },
    setError(state: IBaseState, action: PayloadAction<IError | undefined>) {
      state.error = action.payload ? { ...state.error, ...action.payload } : undefined;
    }
  }
});

export const { setLoading, setError } = base.actions;
export default base.reducer;
