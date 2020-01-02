import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import Router from './routes';

import store from './store';

export default function src() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Router />
    </Provider>
  );
}
