'use strict';

import React from 'react'; // eslint-disable-line
import { Header, NavMain, ContentPage } from 'layout';

const Root = ({ children, route, location }) => (
  <div className="app_root">
    <Header />
    <NavMain />
    <ContentPage>
      {children}
    </ContentPage>
  </div>
);

export { Root };
