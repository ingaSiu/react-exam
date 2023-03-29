import { createPost } from '../api/add';
import { useMutation } from '@tanstack/react-query';

export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      console.log('Post created succesfully');
    },
    onError: () => {
      console.log('Error then creating post');
    },
  });
};
