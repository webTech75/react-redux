import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


export default class Menu extends Component {

    render() {
        const menu = this.props.dishes.map((dish, i) => {
            return (
                <div key={i} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.handleSelectedDish(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
                <div className="row">
                    {menu}
                </div>
          
        )
    }
}