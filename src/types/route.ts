export type Route = {
  path: '/' | '/login' | 'register' | 'add';
  Component: () => JSX.Element;
};
