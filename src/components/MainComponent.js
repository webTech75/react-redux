import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import { DISHES } from '../helper/dishes';
import {DishDetails} from './DishDetails';
import { Footer } from './FooterComponent';

class MainComponent extends Component {

  state = {
    dishes : DISHES,
    selectedDish: null
  }


  handleSelectedDish(dishId) {
    this.setState({selectedDish: dishId});
  }

  render() {

    return (
      <div>
        <Header />
          <Menu dishes={this.state.dishes}
              handleSelectedDish={(dishId) => this.handleSelectedDish(dishId)}
          />
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

          <Footer />
      </div>
    );
  }
}

export default MainComponent;