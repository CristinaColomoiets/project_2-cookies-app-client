import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';


const ReviewCard = ({ id, cookieId, like, dippingRating, userName, commentText }) => {

    const [hover, setHover] = useState();
    const [rating, setRatingState] = useState();

    return (

        <Card border="secondary">
            <Card.Body>

                <Card.Title> {userName} </Card.Title>

                <Card.Text>{commentText} </Card.Text>

                <Card.Text>

                    {[...Array(dippingRating)].map((star, index) => {


                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="dippingRating"
                                    value={dippingRating}
                                    style={{ display: 'none' }}
                                />
                                <FaStar
                                    className="StarRating2"
                                    size={30}
                                    color={dippingRating <= 5 ? "green" : "grey"}


                                />
                            </label>
                        );
                    })}

                </Card.Text>

            </Card.Body>
        </Card>
    );

}

export default ReviewCard