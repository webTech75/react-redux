import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import ContactComponent from './ContactComponent';
import {DishDetails} from './DishDetails';
import { Footer } from './FooterComponent';
import  Home  from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../containers/ActionCreaters';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class MainComponent extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  };
  render() {
    const HomePage = () => (
      <Home
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErr={this.props.dishes.err}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promosLoading={this.props.promotions.isLoading}
        promosErr={this.props.promotions.err}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
    );

    const DishWithId = ({match}) => (
      <DishDetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
       isLoading={this.props.dishes.isLoading}
       err={this.props.dishes.err}
       comment={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
       commentsErr={this.props.comments.err}
       postComment={this.props.postComment}
      />
    )

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <ContactComponent resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders

})

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => dispatch(actions.reset('feedback')),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
});

//withRouter is needed for the animation

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));