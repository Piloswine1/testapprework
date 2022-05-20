import { HTTPError } from 'ky';
import { toast } from 'react-toastify';
import { fetchWithTokenFx } from '.';

fetchWithTokenFx.failData.watch(error => {
  if (error instanceof HTTPError) {
    toast.error(error.message, {
      position: 'top-right',
    });
  }
});
