import ky from 'ky';
import { chain, get, has, tap } from 'lodash-es';
import { toast } from 'react-toastify';
import { authEndpoints } from '../models/auth/auth.api';

const kyInstancce = ky.create({
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

export const AllEndpoints = {
  auth: authEndpoints,
};

export default kyInstancce;
