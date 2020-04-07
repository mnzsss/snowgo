import React from 'react';
import { Route } from 'react-router-dom';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import MobileLayout from '~/pages/_layouts/mobile';
import DesktopLayout from '~/pages/_layouts/desktop';

export default function RouteWrapper({ component: Component, ...rest }) {
  const { width } = useWindowDimensions();

  const mobileMaxSize = 825;
  const Layout = width > mobileMaxSize ? DesktopLayout : MobileLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
