import kyInstancce from '../../api';
import { Credentials, Token } from './auth.types';

export const authEndpoints = {
  registration: (data: any) => kyInstancce.post('app/register', data),
  login: (json: Credentials) => kyInstancce.post('app/login', { json }).json<Token>(),
  forgotPassword: (data: any) => kyInstancce.post('forgot/password', data),
  getProfile: (username: any) => kyInstancce.get(`user/get/${username}`),
  refreshToken: (data: any) => kyInstancce.post('app/refresh-token', data),
  test: () => kyInstancce.get('app/test/get'),
};
