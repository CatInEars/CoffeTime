import { createStore, Store } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

export const globalState = createStore(rootReducer);