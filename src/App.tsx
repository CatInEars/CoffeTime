import React from 'react';
import { Provider } from 'react-redux';
import { globalState } from './modules/redux/state/globalState';

export function App() {
  return (
    <Provider store={globalState}>
    
    </Provider>
  );
}