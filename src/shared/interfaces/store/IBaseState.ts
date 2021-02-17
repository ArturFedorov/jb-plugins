import { IError } from '../api/IError';

export interface IBaseState {
  loading: boolean;
  error: IError | null;
}
