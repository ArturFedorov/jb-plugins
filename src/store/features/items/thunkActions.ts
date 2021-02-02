import {AppThunk} from '../../store';
import {ItemsService} from '../../../api/ItemsService';
import {setItemsLoading, setItemsSuccess, setItemsError} from './index';

export const fetchItems = (): AppThunk => async dispatch => {
  dispatch(setItemsLoading());

  ItemsService.getItems()
    .then(({ data }) => {
      dispatch(setItemsSuccess({ items: data}));
    })
    .catch((error) => dispatch(setItemsError(error)));
}
