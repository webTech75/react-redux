import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';

export const ConfigStore = () => {
   const store = createStore(
      combineReducers({
         dishes: Dishes,
         comments: Comments,
         promotions: Promotions,
         leaders: Leaders
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

   return store;
}