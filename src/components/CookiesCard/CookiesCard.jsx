import Card from 'react-bootstrap/Card';
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
            <Card.Body>
                <Link to={`/cookies/${id}`}>
                    <Card.Link as="span" href="#">Cookies Details</Card.Link>
                </Link>
            </Card.Body>
        </Card>
    );

}
export default CookiesCard