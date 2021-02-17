export interface IGetPayload<T> {
  total: number;
  nextOffset: number;
  payload: T[];
}
