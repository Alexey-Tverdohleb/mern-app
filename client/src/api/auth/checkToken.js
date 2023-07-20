import api from '../client';

export default async function checkToken(json) {
  return await api.post('check', { json }).json();
}
