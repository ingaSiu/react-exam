import { BASE_URL } from './baseApi';
import { Content } from '../types/add';
import { SESSION_KEY } from '../settings';
import httpClient from './httpClient';

export const createPost = ({ title, description }: Content): Promise<any> => {
  return httpClient
    .post(`${BASE_URL}content/skills`, { title, description })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem(SESSION_KEY);
      }
      console.log(error.response.data);
      console.log(error.response.status);
      throw error;
    });
};
