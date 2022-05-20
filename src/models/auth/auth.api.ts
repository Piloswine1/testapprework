import { makeEndpoint } from '../api';
import { Credentials, Token } from './auth.types';

export default {
  // registration: (json: RegistrationRequest) => kyInstancce.post('app/register', { json }).json(), // eslint-disable-line @typescript-eslint/no-explicit-any
  // // useLoginMutation: (json?: Credentials) => useSWR<Token>(['app/login', ]),
  // login: (json: Credentials) => kyInstancce.post('app/login', { json }).json<Token>(),
  login: makeEndpoint<Credentials, Token>('app/login', { method: 'post' }),
  // forgotPassword: (username: string) => kyInstancce.post('forgot/password', { json: {username} }).json(), // eslint-disable-line @typescript-eslint/no-explicit-any
  // refreshToken: (json: Token) => kyInstancce.post('app/refresh-token', {json}).json<Token>(), // eslint-disable-line @typescript-eslint/no-explicit-any
};
