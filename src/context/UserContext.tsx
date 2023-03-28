import { PropsWithChildren, createContext } from 'react';

import { SESSION_KEY } from '../settings';
import { useLocalStorage } from '../hooks/localStorage';

const UserContext = createContext<{
  user: string | null;
  setUser: any;
  isLoggedIn: boolean;
  handleLogOut: () => void;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogOut: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage(SESSION_KEY, null);

  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
  };

  return <UserContext.Provider value={{ user, isLoggedIn, setUser, handleLogOut }}>{children}</UserContext.Provider>;
};
export { UserContext, UserProvider };
