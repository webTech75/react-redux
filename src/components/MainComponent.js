import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import { DISHES } from '../helper/dishes';
import {DishDetails} from './DishDetails';
import { Footer } from './FooterComponent';
import { Home } from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class MainComponent extends Component {

  state = {
    dishes : DISHES,
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
      <Home />
    )
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to='/home' />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default MainComponent;