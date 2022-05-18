import ky from 'ky';
import { get, has } from 'lodash-es';
import { toast } from 'react-toastify';
import { $token } from '../models/auth';
import { authEndpoints } from '../models/auth/auth.api';

let kyInstancce = ky.create({
  prefixUrl: process.env.REACT_APP_API + '/',
  hooks: {
    beforeError: [
      async error => {
        const response = error.response.json();
        if (has(response, 'message')) toast.error(get(response, 'message'));
        if (response) return response;
        return error;
      },
    ],
  },
});

// eslint-disable-next-line effector/no-watch
$token.watch(token => {
  kyInstancce = kyInstancce.extend({
    headers: {
      Authorization: token ? `Bearer_${token}` : undefined,
    },
  });
});

export const AllEndpoints = {
  auth: authEndpoints,
};

export default kyInstancce;
