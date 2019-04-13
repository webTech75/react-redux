import * as ActionTypes from './ActionTypes';
import { DISHES } from '../helper/dishes';

export const addComment = (dishId, rating, author, comment) => ({
   type: ActionTypes.ADD_COMMENT,
   payload: {
      dishId,
      rating,
      author,
      comment
   }
});

//Thunk => action creator return a function
export const fetchDishes = () => dispatch => {
   dispatch(dishesLoading(true));

   setTimeout(() => {
      dispatch(addDishes(DISHES))
   }, 2000)
}

export const dishesLoading = () => ({
   type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (err) => () => ({
   type: ActionTypes.DISHES_FAILED,
   payload: err
});

export const addDishes = dishes => ({
   type: ActionTypes.ADD_DISHES,
   payload: dishes
})