
import { Card } from 'react-bootstrap';

const ReviewCard = ({ id, cookieId, like, dippingRating, userName, comment_text }) => {

    return (

        <Card border="secondary">
            <Card.Body>
                <Card.Title>{userName}</Card.Title>
                <Card.Text>
                    {comment_text}
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default ReviewCard