import api from '../client';

export default async function checkAuth() {
  return await api.get('check').json();
}
