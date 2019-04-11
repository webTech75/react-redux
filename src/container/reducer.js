import { COMMENTS } from '../helper/comments';
import { PROMOTIONS } from '../helper/promotions';
import { LEADERS } from '../helper/leaders';
import { DISHES } from '../helper/dishes';

export const initialState = {
   dishes : DISHES,
   comments: COMMENTS,
   promotions: PROMOTIONS,
   leaders: LEADERS,
};

export const Reducer = (state = initialState, action) => {
   return state;
}