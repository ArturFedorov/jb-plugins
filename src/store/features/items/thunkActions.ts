import { AppThunk } from '../../store';
import { ItemsService } from '../../../api/ItemsService';
import { setItemsSuccess } from './index';

export const fetchItems = (): AppThunk => async (dispatch) => {
  ItemsService.getItems().then(({ data }) => dispatch(setItemsSuccess({ items: data })));
};
