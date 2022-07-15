import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './context/myProvider';

import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);

