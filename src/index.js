import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
