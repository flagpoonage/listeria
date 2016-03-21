'use strict';

import reqwest from 'reqwest';

const panelLoaded = (data, url) => {
  return { type: 'PANEL_LOAD_DONE', data, url };
};

const panelError = (error, url) => {
  return { type: 'PANEL_LOAD_ERROR', error, url };
};

const panelStart = (url) => {
  return { type: 'PANEL_LOAD_START', url };
};

const loadPanel = (url) => {
  return (dispatch) => {
    dispatch(panelStart(url));

    return reqwest({ url, type: 'json' })
      .then(data => dispatch(panelLoaded(data, url)))
      .catch(err => dispatch(panelError(err, url)));
  };
};

export { loadPanel };
