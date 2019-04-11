import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigStore = () => {
   const store = createStore(
      Reducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );

   return store;
}