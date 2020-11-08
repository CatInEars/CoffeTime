/*   
*                     CatInEars             
*       My GitHub: https://github.com/CatInEars
*/

import React from 'react';
import { Provider } from 'react-redux';
import { App } from './src/index';
import { globalState } from './src/modules/redux/state/globalState';

export default function() {
  return (
    <Provider store={globalState}>
      <App />
    </Provider>
  );
}