import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export const DishDetails = ({dish}) => {
    return (
        dish ? (
            <div className="row">
                <div className="col-12 col-md-6">
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
            </div>
         ): (
            <div></div>
        )
    )
}

    