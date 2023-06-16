import api from './api';

export async function create(body, token) {
  const response = await api.post('/home', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function find(token) {
  const response = await api.get('/home', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}