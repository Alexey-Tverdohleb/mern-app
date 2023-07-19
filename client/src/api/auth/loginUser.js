import api from '../client.js';

export default async function (json) {
  return await api.post('login', { json }).json();
}
