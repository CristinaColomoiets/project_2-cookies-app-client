
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = "http://localhost:5000"


const CookiesCard = ({ name, image_url, brand, id, getAllCookies }) => {

    const deleteCookie = () => {
        axios
            .delete(`${API_URL}/cookies/${id}`)
            .then(() => getAllCookies())
            .catch((err) => console.log(err))
    }

    return (
        <Card border="secondary">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {brand}
                </Card.Text>
            </Card.Body>
            <Container>
                <Row>
                    <Col md={{ span: 4 }}>
                        <Card.Body>
                            <Link to={`/cookies/${id}`}>
                                <Button as="span">Details</Button>
                            </Link>
                        </Card.Body>
                    </Col>

                    <Col md={{ span: 4 }}>
                        <Card.Body>
                            <Button as="span" onClick={deleteCookie}>X </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );

}
export default CookiesCard