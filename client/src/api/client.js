import ky from 'ky';

import { TOKEN } from '../constants/localStorage.js';
import { AUTHORIZATION } from '../constants/headers.js';

const api = ky.extend({
  prefixUrl: import.meta.env.VITE_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const token = window.localStorage.getItem(TOKEN);
        if (!token) return;

        request.headers.set(AUTHORIZATION, `Bearer ${token}`);
      },
    ],
  },
});

export default api;
