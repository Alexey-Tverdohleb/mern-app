import api from '../client.js';

export default async function (json) {
  return await api.post('registration', { json }).json();
}
