import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { setItemsLoading } from '../../store/features/plugins';
import store from '../../store/store';
import { isAxiosRequestConfigExtended } from '../config/AxiosConfigExtension';

export interface AxiosLoadingRequestConfig extends AxiosRequestConfig {
  noLoading?: boolean;
}

interface AxiosLoadingResponse extends AxiosResponse {
  config: AxiosLoadingRequestConfig;
}

interface AxiosLoadingError extends AxiosError {
  config: AxiosLoadingRequestConfig;
}

axios.interceptors.request.use(
  (config: AxiosLoadingRequestConfig) => {
    if (isAxiosRequestConfigExtended(config) && config.noLoader) {
      return config;
    }

    store.dispatch(setItemsLoading());
    return config;
  },
  (error: Error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response: AxiosLoadingResponse) => response,
  (error: AxiosLoadingError) => Promise.reject(error)
);
