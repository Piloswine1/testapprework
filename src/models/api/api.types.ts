import { Options } from 'ky';
import { Token } from '../auth/auth.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BaseRequest<T = any> = Omit<Options, 'json'> & { json?: T };
export type RequestWithToken = {
  url: string;
  //   eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: BaseRequest<any>;
  token?: Token | null;
};
