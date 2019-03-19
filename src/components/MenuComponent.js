import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Menu extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const menu = this.props.dishes.map((dish, i) => {
            return (
                <div key={i} className="col-12 col-md-5 m-1">
                    <Card tag="li">
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
            </div>
        )
    }
}