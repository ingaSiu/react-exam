import { BASE_URL } from './baseApi';
import { User } from '../types/user';
import httpClient from './httpClient';

export const register = ({ email, password }: User): Promise<any> => {
  return httpClient
    .post(`${BASE_URL}auth/register`, { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      throw error;
    });
};
