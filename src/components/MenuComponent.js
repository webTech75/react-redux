import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    const Menu = (props) => {

        const menu = props.dishes.map((dish, i) => (
                <div key={i} className="col-12 col-md-5 m-1">
                    <Card onClick={() => props.handleSelectedDish(dish.id) }>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
        ));

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>


        )

    }

    export default Menu;