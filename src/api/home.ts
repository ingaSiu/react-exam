import { BASE_URL } from './baseApi';
import { Content } from '../types/add';
import { SESSION_KEY } from '../settings';
import httpClient from './httpClient';

export const getPosts = (): Promise<Content[]> => {
  return httpClient
    .get(`${BASE_URL}content/skills`)
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
