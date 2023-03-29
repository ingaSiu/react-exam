import Menu from '../components/Menu';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Menu></Menu>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
