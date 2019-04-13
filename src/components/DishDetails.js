import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';



const RenderDish = ({dish}) => (
    <div className="col-12 col-md-6">
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>
)

const RenderComments = ({comments, addComment, dishId}) => (
    comments != null ? (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {
                    comments.map((comment) => (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                        </li>
                    ))
                }
            </ul>
            <div>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        </div>
    ):(
        <div></div>
    )
)

export const DishDetails = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.err) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.err}</h4>
                </div>
            </div>
        )
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                   <RenderDish dish={props.dish} />
                   <RenderComments
                    comments={props.comment}
                    addComment={props.addComment}
                    dishId={props.dish.id}
                   />
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
