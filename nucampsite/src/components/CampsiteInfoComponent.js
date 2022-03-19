import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';

class CommentForm extends Component {
    state = {
        isOpen: false
    }

    // arrow function to bind onClick
    toggleModal = () => {
        this.setState( {isOpen: !this.state.isOpen})
}

    render() {
        return (
            <div>
                <Button className='fa fa-lg fa-pencil' outline onClick={this.toggleModal}>
                    {" "}Submit Comment
                </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Header
                    </ModalHeader>
                    <ModalBody>
                        Body
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return (
                        <div>
                            <p>
                                {comment.text} <br />
                                -- {comment.author}, {" "}
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </div>
                    );
                })}
                <CommentForm />
            </div>
        );
    } else {
        return <div />;
    }
};

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;