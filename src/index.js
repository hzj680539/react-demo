import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from '@/store/store';
import 'promise-polyfill/src/polyfill';
import '@/assets/style/base.less'

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}
render(Route);

registerServiceWorker();
