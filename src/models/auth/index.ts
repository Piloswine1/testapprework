import { createEffect, createEvent, createStore } from 'effector-logger';
import axiosInstance from '../../api';
import { authEndpoints } from './auth.api';
import { Credentials, Token } from './auth.types';
import isFunction from 'lodash-es/isFunction';
import { connectLocalStorage } from '../../utils';

type AuthStore = {
  isAuthenticated: boolean;
  token: Token | null;
};
const STORAGE_KEY = 'AUTH';

export const authLocalStorage = connectLocalStorage(STORAGE_KEY);

export const setToken = createEvent<AuthStore['token']>();

export const $auth = createStore<AuthStore>(
  authLocalStorage.init({
    isAuthenticated: false,
    token: null,
  }),
);

export const $token = $auth.map(state => state.token);

export const loginFx = createEffect(async (credentials: Credentials) => {
  const { data: token } = await authEndpoints.login(credentials);
  if (axiosInstance.defaults.headers && isFunction(axiosInstance.defaults.headers?.set))
    axiosInstance.defaults.headers.set('Authorize', `Bearer_${token.accessToken}`);
  return token;
});
