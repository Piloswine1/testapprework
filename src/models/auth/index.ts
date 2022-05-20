import { createEvent, createStore } from 'effector-logger';
import { AuthStore } from './auth.types';
import { connectLocalStorage } from '../../utils';

const STORAGE_KEY = 'AUTH';

export const authLocalStorage = connectLocalStorage(STORAGE_KEY);

export const setToken = createEvent<AuthStore['token']>();
export const logout = createEvent();

export const $auth = createStore<AuthStore>(
  authLocalStorage.init({
    isAuthenticated: false,
    token: null,
  }),
).reset([logout]);

export const $token = $auth.map(state => state.token);
