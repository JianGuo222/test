import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import ContainerApp from './redux/container';

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Arial';
    height: 100%;
    width: 100%;
    font-size: 12px;
    background-color: #eeeded;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ContainerApp />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
