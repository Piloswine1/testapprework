import ky, { HTTPError, Options } from 'ky';
import { attach, createEffect, Effect } from 'effector';
import { BaseRequest, RequestWithToken } from './api.types';
import { $token, setToken } from '../auth';
import { Token } from '../auth/auth.types';
import { merge } from 'lodash-es';

const kyInstance = ky.create({
  prefixUrl: process.env.REACT_APP_API,
});

const getRefresh = (token?: Token | null) =>
  kyInstance.post('app/refresh-token', { json: token }).json<Token>();
const callApi = <T = any>(
  url: string,
  options: Options = { headers: {} },
  token?: Token | null,
) => {
  options.headers = {
    ...options.headers,
    Authorisation: token ? `Bearer_${token}` : undefined,
  };
  return kyInstance(url, options).json<T>();
};

export const fetchWithTokenFx = createEffect(async ({ url, options, token }: RequestWithToken) => {
  try {
    return await callApi(url, options, token);
  } catch (error) {
    if (error instanceof HTTPError && token) {
      const newToken = await getRefresh(token);
      setToken(newToken);
      return await callApi(url, options, newToken);
    }
    throw error;
  }
});

export const makeEndpoint = <Req = any, Res = any>(
  url: string,
  oldOptions?: BaseRequest<any>,
): Effect<BaseRequest<Req>, Res> =>
  attach({
    effect: fetchWithTokenFx,
    source: $token,
    mapParams: (newOptions, token) => ({ url, options: merge(oldOptions, newOptions), token }),
  });
