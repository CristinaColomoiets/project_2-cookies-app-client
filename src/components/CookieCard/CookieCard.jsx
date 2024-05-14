
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const API_URL = "http://localhost:5000"


const CookieCard = ({ name, imageUrl, brand, id }) => {


    return (
        <Card border="secondary">
            <Card.Img variant="top" src={imageUrl} />
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
                            <Link to={`/cookie/${id}`}>
                                <Button as="span">Details</Button>
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );

}
export default CookieCard