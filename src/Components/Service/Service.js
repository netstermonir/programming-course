import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClock, faGraduationCap, faUsers } from '@fortawesome/free-solid-svg-icons';

const Service = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const clockIcon = <FontAwesomeIcon icon={faClock} />
    const certiIcon = <FontAwesomeIcon icon={faGraduationCap} />
    const enrolltiIcon = <FontAwesomeIcon icon={faUsers} />
    const { name, duration, certification, enroll, price, img } = props.service;
    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" className="img-fluid p-1" src={img} />
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <Card.Title>{name}</Card.Title>
                            <span>{certiIcon} : {certification}</span>
                        </div>
                        <Card.Text className="d-flex flex-column flex-md-row justify-content-between fw-normal">
                            <span>{clockIcon} : {duration}</span>
                            <span>{enrolltiIcon} : {enroll}</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <span className="fw-bolder text-muted">Price: ${price}</span>
                            <Button variant="success" className="get-btn">{cartIcon} Enroll Now</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;