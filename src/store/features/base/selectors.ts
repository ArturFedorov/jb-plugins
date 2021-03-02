import { IBaseState } from './index';
import { IError } from '../../../shared/interfaces/api/IError';

export const getLoadingStatus = (state: IBaseState): boolean => state.loading;
export const getError = (state: IBaseState): IError | undefined => state.error;
export const getHasError = (state: IBaseState): boolean => Boolean(state.error);
