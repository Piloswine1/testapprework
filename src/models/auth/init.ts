import { $auth, authLocalStorage } from '.';
import authApi from './auth.api';

$auth.watch(authLocalStorage); // eslint-disable-line effector/no-watch

$auth.on(authApi.login.doneData, (_, token) => ({
  isAuthenticated: true,
  token: token,
}));
