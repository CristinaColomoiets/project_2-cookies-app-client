
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CookiesCard = ({ name, image_url, brand, id }) => {
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
                    <Col md ={{span: 4}}>
                        <Card.Body>
                            <Link to={`/cookies/${id}`}>
                                <Button href="#">Details</Button>
                            </Link>
                        </Card.Body>
                    </Col>

                    <Col md ={{span: 4}}>
                        <Card.Body>
                            <Link to={`/cookies/${id}`}>
                                <Button href="#">Edit</Button>
                            </Link>
                        </Card.Body>
                    </Col>

                    <Col md ={{span: 4}}>
                        <Card.Body>
                            <Link to={`/cookies/${id}`}>
                                <Button href="#">Delete</Button>
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );

}
export default CookiesCard