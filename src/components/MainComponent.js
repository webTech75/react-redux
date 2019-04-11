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

class MainComponent extends Component {
  render() {
    const HomePage = () => (
      <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
    );

    const DishWithId = ({match}) => (
      <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comment={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
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
          <Route exact path='/contactus' component={ContactComponent} />
          <Redirect to='/home' />
        </Switch>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

export default connect(mapStateToProps)(MainComponent);

//export default withRouter(connect(mapStateToProps)(MainComponent));