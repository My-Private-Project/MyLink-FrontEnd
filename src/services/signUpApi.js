import api from './api';

export async function signUp(name, email, password) {
  const response = await api.post('/sign-up', { name, email, password });
  return response.data;
}
//
