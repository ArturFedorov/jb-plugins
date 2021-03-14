import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { setLoading } from '../../store/features/base';
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

/**
 * Manage loading state globally
 * Can be disabled via options in axios via extended configuration
 */
axios.interceptors.request.use(
  (config: AxiosLoadingRequestConfig) => {
    if (isAxiosRequestConfigExtended(config) && config.noLoader) {
      return config;
    }

    store.dispatch(setLoading(true));
    return config;
  },
  (error: Error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response: AxiosLoadingResponse) => {
    store.dispatch(setLoading(false));
    return response;
  },
  (error: AxiosLoadingError) => Promise.reject(error)
);
