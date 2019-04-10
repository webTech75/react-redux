import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import { DISHES } from '../helper/dishes';
import ContactComponent from './ContactComponent';
import {DishDetails} from './DishDetails';
import { COMMENTS } from '../helper/comments';
import { PROMOTIONS } from '../helper/promotions';
import { LEADERS } from '../helper/leaders';
import { Footer } from './FooterComponent';
import  Home  from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class MainComponent extends Component {

  state = {
    dishes : DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    selectedDish: null
  }


  // handleSelectedDish(dishId) {
  //   this.setState({selectedDish: dishId});
  // }
          /*<Menu dishes={this.state.dishes}
              handleSelectedDish={(dishId) => this.handleSelectedDish(dishId)}
          />
            <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/
  render() {
    const HomePage = () => (
      <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    );

    const DishWithId = ({match}) => (
      <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
      />
    )

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={ContactComponent} />
          <Redirect to='/home' />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default MainComponent;