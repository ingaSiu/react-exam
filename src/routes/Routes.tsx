import { Route, Routes as RoutesWrapper } from 'react-router-dom';

import { MainLayoutRoutes } from './const';

const Routes = () => {
  const { routes, Layout } = MainLayoutRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </RoutesWrapper>
  );
};

export default Routes;
