import { AxiosRequestConfig } from 'axios';

/**
 * Extended configuration for explicit disabling of loader/loading
 */
export interface AxiosRequestConfigExtended extends AxiosRequestConfig {
  noLoader: boolean;
}

export const isAxiosRequestConfigExtended = (
  config: AxiosRequestConfig
): config is AxiosRequestConfigExtended => 'noLoader' in config;
