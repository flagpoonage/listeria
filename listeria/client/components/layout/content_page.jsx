require('./style/content_page.pcss');

import React from 'react'; // eslint-disable-line no-unused-vars

const ContentPage = ({ children }) => (
  <main className="content_page">
    {children}
  </main>
);

export { ContentPage };
