export interface IPluginQueryParams {
  query?: string;
  category?: 'latest' | 'popular';
  offset?: number;
  limit?: number;
}
