import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import heartOn from "./../../assets/hearton.svg";

import "./ReviewCard.css"

const ReviewCard = ({ dippingRating, userName, commentText, like }) => {
    return (
        <Card className="shadow-lg p-3 mb-5 bg-white rounded" border="secondary">
            <Card.Title>{userName}</Card.Title>
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
            <Card.Text>{commentText}</Card.Text>
            <Card.Body>
                {like && <img src={heartOn} alt="Heart On" height={40} width={40} />}
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;
