import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,Col, Label, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

//form validation
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
export default class CommentForm extends Component {

   state = {
      isModalOpen: false
   }

   toggleModal = () => {
      this.setState({
         isModalOpen: !this.state.isModalOpen
      })
   }

   handleSubmit = values => {
      this.toggleModal();
      this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
      console.log("form is submitted", JSON.stringify(values))
  }
   render() {

      return(
         <>
            <Button outline onClick={this.toggleModal}>
               <span className="fa fa-pencil"></span> Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
               <ModalBody>
                  <LocalForm onSubmit={values => this.handleSubmit(values)}>
                     <Row className="form-group">
                        <Col>
                           <Label htmlFor="rating">Rating</Label>
                           <Control.select model=".rating" name="rating" className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                           </Control.select>
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Col>
                           <Label htmlFor="author">Your Name</Label>
                           <Control.text model=".author" id="author" name="author"
                                 placeholder="Your Name"
                                 className="form-control"
                                 validators={{
                                    required,
                                    minLength: minLength(3),
                                    maxLength: maxLength(15)
                                 }}
                           />
                           <Errors
                              className="text-danger"
                              model=".author"
                              show="touched"
                              messages={{
                                    required: "Required",
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 characters or less"
                              }}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Col>
                           <Label htmlFor="comment">Comment</Label>
                           <Control.textarea model=".comment" id="comment" name="comment"
                              rows="6"
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     <Button type="submit" value="submit" color="primary">Submit</Button>
                  </LocalForm>
               </ModalBody>
            </Modal>
         </>
      )
   }
}