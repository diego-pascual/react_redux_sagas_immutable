import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Store from './redux/store';

const MOUNT_NODE = document.getElementById('root');

render(<App store={Store}/>,MOUNT_NODE);

if ((process.env.NODE_ENV === 'development') && (module.hot)) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    const RedBox = require('redbox-react').default;
    try {
      render(<NextApp store={Store}/>, MOUNT_NODE);
    } catch (e) {
      render(<RedBox error={e} />, MOUNT_NODE);
    }
  }); 
}
