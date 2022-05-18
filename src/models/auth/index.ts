import { createEffect, createEvent, createStore } from 'effector-logger';
import { AuthStore, Credentials, Token } from './auth.types';
import { connectLocalStorage } from '../../utils';
import { AllEndpoints } from '../../api';

const STORAGE_KEY = 'AUTH';

export const authLocalStorage = connectLocalStorage(STORAGE_KEY);

export const setToken = createEvent<AuthStore['token']>();
export const logout = createEvent();

export const $auth = createStore<AuthStore>(
  authLocalStorage.init({
    isAuthenticated: false,
    token: null,
  }),
);

export const $token = $auth.map(state => state.token);

export const loginFx = createEffect<Credentials, Token | null>(data =>
  AllEndpoints.auth.login(data),
);
