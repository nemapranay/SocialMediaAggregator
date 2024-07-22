// App.js
import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './src/AppNavigation';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
