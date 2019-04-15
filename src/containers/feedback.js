import * as ActionTypes from './ActionTypes';
import { initialFeedback } from './forms';

export const Feedback = (state, action) => {
   switch(action.type) {
      case ActionTypes.ADD_FEEDBACK:
      return {...state, feedback: action.payload,}

      default:
         return state;
   }
}