export interface IError {
  status?: string | number;
  text?: string;
  title?: string;
  type: 'error';
}
