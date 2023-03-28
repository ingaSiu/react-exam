import Add from '../Pages/Add/Add';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MainLayout from '../Layout/Layout';
import Register from '../Pages/Register/Register';

export const HOME_PATH = '/';
export const ADD_PATH = '/add';
export const LOGIN_PATH = '/login';
export const REGISTER_PATH = '/register';

export const MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: ADD_PATH, Component: Add },
    { path: LOGIN_PATH, Component: Login },
    { path: REGISTER_PATH, Component: Register },
  ],
};
