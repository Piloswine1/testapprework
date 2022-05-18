import kyInstancce from '../../api';
import { Credentials, Token } from './auth.types';

export const authEndpoints = {
  registration: (data: any) => kyInstancce.post('app/register', data), // eslint-disable-line @typescript-eslint/no-explicit-any
  login: (json: Credentials) => kyInstancce.post('app/login', { json }).json<Token>(),
  forgotPassword: (data: any) => kyInstancce.post('forgot/password', data), // eslint-disable-line @typescript-eslint/no-explicit-any
  getProfile: (username: any) => kyInstancce.get(`user/get/${username}`), // eslint-disable-line @typescript-eslint/no-explicit-any
  refreshToken: (data: any) => kyInstancce.post('app/refresh-token', data), // eslint-disable-line @typescript-eslint/no-explicit-any
  test: () => kyInstancce.get('app/test/get'),
};
