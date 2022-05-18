import { $auth, authLocalStorage, loginFx, logout } from '.';

$auth.watch(authLocalStorage); // eslint-disable-line effector/no-watch

$auth.on(loginFx.doneData, (_, token) => ({
  isAuthenticated: true,
  token: token,
}));

$auth.reset([logout]);
