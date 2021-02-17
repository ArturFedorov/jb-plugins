import { AxiosError } from 'axios';
import { isAxiosRequestConfigExtended } from '../config/AxiosConfigExtension';
import { IError } from '../../shared/interfaces/api/IError';
import { setItemsError } from '../../store/features/items';
import store from '../../store/store';

export default function errorResponseHandler(error: AxiosError) {
  if (isAxiosRequestConfigExtended(error.config)) {
    return Promise.reject(error);
  }

  const errorMessage: IError = { type: 'error' };

  if (error.response) {
    errorMessage.text = error.response.data;
    errorMessage.status = error.response.status;
    errorMessage.title = error.response.statusText;
  } else if (error.request) {
    errorMessage.text = error.request.response;
    errorMessage.status = error.request.code;
    errorMessage.title = error.request.statusText;
  } else {
    errorMessage.text = error.message;
    errorMessage.status = error.code || 500;
    errorMessage.title = 'Server error';
  }

  store.dispatch(setItemsError(errorMessage));

  return Promise.reject(error);
}
