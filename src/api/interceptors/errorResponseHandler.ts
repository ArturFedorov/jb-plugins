import { AxiosError } from 'axios';
import { isAxiosRequestConfigExtended } from '../config/AxiosConfigExtension';
import { IError } from '../../shared/interfaces/api/IError';
import store from '../../store/store';
import { setError, setLoading } from '../../store/features/base';

export default function errorResponseHandler(error: AxiosError) {
  if (isAxiosRequestConfigExtended(error.config)) {
    return Promise.reject(error);
  }

  const errorMessage: IError = { type: 'error' };

  if (error.response) {
    errorMessage.text = error.response.data.message || error.response.statusText;
    errorMessage.status = error.response.data.statusCode || error.response.status;
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

  store.dispatch(setError(errorMessage));
  store.dispatch(setLoading(false));

  return Promise.reject(error);
}
