import * as ActionTypes from './ActionTypes';
import { baseURL } from '../helper/baseURL';

export const addComment = (comment) => ({
   type: ActionTypes.ADD_COMMENT,
   payload: comment
});

//Thunk => action creator that return a function

export const postComment = (dishId, rating, author, comment) => dispatch => {
   const newComment = {
      dishId,
      rating,
      author,
      comment
   };
   newComment.date = new Date().toISOString();

   return fetch(baseURL + 'comments', {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
         'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
   })
   .then(res => {
      if(res.ok) {
         return res;
      }else{
         let error = new Error('Error ' + res.status + ': ' + res.statusText);
         error.res = res;
         throw error;
      }
   },
   error => {
      let errMess = new Error(error.message);
      throw errMess;
   })
   .then(res => res.json())
   .then(res => dispatch(addComment(res)))
   .catch(err => console.log('Post comments: your comment could not be posted', err.message));
}

//add feedback
export const addFeedback = feedback => ({
   type: ActionTypes.ADD_FEEDBACK,
   payload: {...feedback, date: new Date().toISOString()}
})

export const postFeedback = (newFeedback) => dispatch => {
   //newFeedback.date = new Date().toISOString();

   return fetch(baseURL + 'feedback', {
      method: 'POST',
      body: JSON.stringify(newFeedback),
      headers: {
         'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
   })
   .then(res => {
      if(res.ok) {
         return res;
      }else{
         let error = new Error('Error ' + res.status + ': ' + res.statusText);
         error.res = res;
         throw error;
      }
   },
   error => {
      let errMess = new Error(error.message);
      throw errMess;
   })
   .then(res => res.json())
   .then(res => dispatch(addFeedback(res)))
   .catch(err => console.log('Post feedback: your your feedback could not be posted', err.message));
}

//fetch dishes
export const fetchDishes = () => dispatch => {
   dispatch(dishesLoading(true));

   return fetch(baseURL + 'dishes')
      //handle the response form the server
      .then(res => {
         if(res.ok) {
            return res;
         }else{
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.res = res;
            throw error;
         }
      },
      //if the server does not response
      error => {
         let errMess = new Error(error.message);
         throw errMess;
      })
      .then(res => res.json())
      .then(dishes => dispatch(addDishes(dishes)))
      .catch(err => dispatch(dishesFailed(err.message)));
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
});

//fetch comments
export const fetchComments = () => dispatch => {

   return fetch(baseURL + 'comments')
      //handle the response form the server
      .then(res => {
         if(res.ok) {
            return res;
         }else{
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.res = res;
            throw error;
         }
      },
      //if the server does not response
      error => {
         let errMess = new Error(error.message);
         throw errMess;
      })
      .then(res => res.json())
      .then(comments => dispatch(addComments(comments)))
      .catch(err => dispatch(commentsFailed(err.message)));
}

export const commentsFailed = (err) => () => ({
   type: ActionTypes.COMMENTS_FAILED,
   payload: err
});

export const addComments = comments => ({
   type: ActionTypes.ADD_COMMENTS,
   payload: comments
});

//fetch promotions
export const fetchPromos = () => dispatch => {
   dispatch(promosLoading(true));

   return fetch(baseURL + 'promotions')
      //handle the response form the server
      .then(res => {
         if(res.ok) {
            return res;
         }else{
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.res = res;
            throw error;
         }
      },
      //if the server does not response
      error => {
         let errMess = new Error(error.message);
         throw errMess;
      })
      .then(res => res.json())
      .then(promos => dispatch(addPromos(promos)))
      .catch(err => dispatch(promosFailed(err.message)));
}

export const promosLoading = () => ({
   type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (err) => () => ({
   type: ActionTypes.PROMOS_FAILED,
   payload: err
});

export const addPromos = promos => ({
   type: ActionTypes.ADD_PROMOS,
   payload: promos
});

//fetch leaders
export const fetchLeaders = () => dispatch => {
   dispatch(leadersLoading(true));

   return fetch(baseURL + 'leaders')
      //handle the response form the server
      .then(res => {
         if(res.ok) {
            return res;
         }else{
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.res = res;
            throw error;
         }
      },
      //if the server does not response
      error => {
         let errMess = new Error(error.message);
         throw errMess;
      })
      .then(res => res.json())
      .then(leaders => dispatch(addLeaders(leaders)))
      .catch(err => dispatch(leadersFailed(err.message)));
}

export const leadersLoading = () => ({
   type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (err) => () => ({
   type: ActionTypes.LEADERS_FAILED,
   payload: err
});

export const addLeaders = leaders => ({
   type: ActionTypes.ADD_LEADERS,
   payload: leaders
});