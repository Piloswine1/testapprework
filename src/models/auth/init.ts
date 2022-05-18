import { $auth, authLocalStorage, loginFx } from '.';

$auth.watch(authLocalStorage);

$auth.on(loginFx.doneData, (_, token) => ({
  isAuthenticated: true,
  token: token,
}));