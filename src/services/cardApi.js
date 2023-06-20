import api from './api';

export async function create(body, token) {
  const response = await api.post('/creator', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function update(body, token) {
  return await api.put('/creator', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function remove(id, token) {
  return await api.delete(`/creator/${id}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}