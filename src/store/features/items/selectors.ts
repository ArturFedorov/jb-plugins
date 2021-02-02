import {ItemsState} from './index';
import {IModel} from '../../../shared/interfaces/IModel';

export const getItems = (state: ItemsState): IModel[] => state.items;
