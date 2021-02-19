import { AxiosRequestConfig } from 'axios';

export interface AxiosRequestConfigExtended extends AxiosRequestConfig {
  noLoader: boolean;
}

export const isAxiosRequestConfigExtended = (
  config: AxiosRequestConfig
): config is AxiosRequestConfigExtended => 'noLoader' in config;
