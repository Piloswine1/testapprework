import { Options } from 'ky';
import { Token } from '../auth/auth.types';

export type BaseRequest<T = any> = Omit<Options, 'json'> & { json?: T };
export type RequestWithToken = {
  url: string;
  options?: BaseRequest<any>;
  token?: Token | null;
};
