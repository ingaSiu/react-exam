import { SESSION_KEY } from '../settings';
import { getPosts } from '../api/home';
import { useQuery } from '@tanstack/react-query';

const POSTS = 'POSTS';

export const usePosts = () => {
  return useQuery([POSTS, localStorage.getItem(SESSION_KEY)], getPosts);
};
