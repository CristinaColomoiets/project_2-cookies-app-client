
import { Card } from 'react-bootstrap';

const ReviewCard = ({ id, cookieId, like, dippingRating, userName, commentText }) => {

    return (

        <Card border="secondary">
            <Card.Body>
                <Card.Title>{userName}</Card.Title>
                <Card.Text>
                    {commentText}
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default ReviewCard