import { IBaseState } from './index';

export const getLoadingStatus = (state: IBaseState) => state.loading;
export const getError = (state: IBaseState) => state.error;
