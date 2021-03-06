import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NotFound = () => (
        <Container className="mt-5 pt-5">
            <Row>
                <Col>
                    <h1><FontAwesomeIcon icon={faBookDead} /> Oops! The page you are looking for was not found...</h1>
                    <p>Return to <Link to="/">Home Page</Link></p>
                </Col>
            </Row>
        </Container>
);


export default NotFound;