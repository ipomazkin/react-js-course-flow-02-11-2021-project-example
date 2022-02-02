import React from 'react';
import ReactDOM from 'react-dom';
import { AppWrapper } from './AppWrapper';

import { idsReducer, idsAddId, idsRemoveId } from './examples/reducers';
import './examples/redux';

window.example = {
  idsReducer, idsAddId, idsRemoveId
};

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
