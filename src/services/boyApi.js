import api from './api';

export async function find(name, token) {
    const response = await api.get(`/creator/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }