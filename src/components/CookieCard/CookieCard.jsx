
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_URL


const CookieCard = ({ name, imageUrl, brand, id, dippingRating, averageRating }) => {


    return (
        <Card border="secondary">

            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {brand}
                </Card.Text>
            </Card.Body>

            <Card.Text>

                {[...Array(averageRating)].map((star, index) => {

                    return (
                        <label key={index}>
                            <FaStar
                                className="StarRating2"
                                size={30}
                                color={dippingRating <= 5 ? "green" : "grey"}
                            />
                        </label>
                    );
                })}

            </Card.Text>


            <Col md={{ span: 4 }}>
                <Card.Body>
                    <Link to={`/cookie/${id}`}>
                        <Button as="span">Details</Button>
                    </Link>
                </Card.Body>
            </Col>


        </Card>
    );

}
export default CookieCard