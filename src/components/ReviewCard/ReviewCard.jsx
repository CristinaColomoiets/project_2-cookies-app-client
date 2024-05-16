import { Card, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import heartOn from "./../../assets/hearton.svg";

import "./ReviewCard.css"

const ReviewCard = ({ dippingRating, userName, commentText, like }) => {
    return (

        <Col md={{ span: 6 }} >
            <Card className='reviewCard'>
                <Card.Title className='userTitle'>{userName}</Card.Title>
                <Card.Text className='reviewStars'>
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
                                    color={ratingValue <= dippingRating ? "#BA8F6F" : "#F4C992"}
                                />
                            </label>
                        );
                    })}
                    <Card.Text className='heart-icon'>
                        {like && <img src={heartOn} alt="Heart On" height={40} width={40} />}
                    </Card.Text>
                </Card.Text>
                <Card.Text>{commentText}</Card.Text>

                <Card.Body>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default ReviewCard;
