import api from '../client.js';

export default async function activateUser(token) {
  return await api.post('activation', { json: { token } }).json();
}
