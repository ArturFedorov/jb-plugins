import { AxiosRequestConfig } from 'axios';

export interface AxiosRequestConfigExtended extends AxiosRequestConfig {
  noGlobalError: boolean;
}

export const isAxiosRequestConfigExtended = (
  config: AxiosRequestConfig
): config is AxiosRequestConfigExtended => 'noGlobalError' in config;
