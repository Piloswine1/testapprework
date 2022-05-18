import { $auth, authLocalStorage, loginFx, logout } from '.';

$auth.watch(authLocalStorage);

$auth.on(loginFx.doneData, (_, token) => ({
  isAuthenticated: true,
  token: token,
}));

$auth.reset([logout]);
