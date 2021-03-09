export interface IPluginQueryParams {
  query?: string;
  code?: 'latest' | 'popular';
  offset?: number;
  limit?: number;
}
