import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../helper/dishes';
import {DishDetails} from './DishDetails';

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu dishes={this.state.dishes} 
              handleSelectedDish={(dishId) => this.handleSelectedDish(dishId)}
          />
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
      </div>
    );
  }
}

export default MainComponent;