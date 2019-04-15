import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
//import { InitialFeedback } from './forms';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Feedback } from './feedback';

const combinedReducer = combineReducers({
   dishes: Dishes,
   comments: Comments,
   promotions: Promotions,
   leaders: Leaders,
   ...createForms({
      feedback: Feedback
   })
});

const composeWithDevtools = composeWithDevTools(
   applyMiddleware(thunk)
   //applyMiddleware(thunk, logger),
);

export const ConfigStore = () => {
   const store = createStore(combinedReducer, composeWithDevtools);

   return store;
}