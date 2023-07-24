import api from '../client.js';

export default async function getUser() {
  return await api.get('user').json();
}
