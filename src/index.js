import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}
render(Route);

registerServiceWorker();
