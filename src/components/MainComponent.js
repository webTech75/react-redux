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
import { addComment, fetchDishes } from '../containers/ActionCreaters';
import { actions } from 'react-redux-form';

class MainComponent extends Component {

  componentDidMount() {
    this.props.fetchDishes();
  };
  render() {
    const HomePage = () => (
      <Home
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErr={this.props.dishes.err}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
    );

    const DishWithId = ({match}) => (
      <DishDetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
       isLoading={this.props.dishes.isLoading}
       err={this.props.dishes.err}
       comment={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
       addComment={this.props.addComment}
      />
    )

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={() => <ContactComponent resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Redirect to='/home' />
        </Switch>

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
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => dispatch(actions.reset('feedback'))
})
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

//export default withRouter(connect(mapStateToProps)(MainComponent));