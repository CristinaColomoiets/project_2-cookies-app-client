import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';


const ReviewCard = ({ dippingRating, userName, commentText }) => {

    const [hover, setHover] = useState();


    return (

        <Card border="secondary">
            <Card.Body>

                <Card.Title> {userName} </Card.Title>\

                <Card.Text>{commentText} </Card.Text>

                <Card.Text>

                    {[...Array(5)].map((star, index) => {

                        const ratingValue = index + 1;

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
                                    color={ratingValue <= dippingRating ? "green" : "grey"}


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