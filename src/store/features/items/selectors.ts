import { ItemsState } from './index';
import { IModel } from '../../../shared/interfaces/IModel';

export const getItems = (state: ItemsState): IModel[] => state.items;
export const getStatus = (state: ItemsState): string => state.status;
export const getLoadingStatus = (state: ItemsState) => state.loading;
export const getError = (state: ItemsState) => state.error;
