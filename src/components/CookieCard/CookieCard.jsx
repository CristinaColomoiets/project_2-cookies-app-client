import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { useState, useEffect } from 'react';
import LikeButton from '../LikeButton/LikeButton';
import './CookieCard.css'

const API_URL = import.meta.env.VITE_API_URL;

const CookieCard = ({ name, imageUrl, brand, id, originCountry }) => {

    const [reviews, setReviews] = useState([]);

    const [dippingRatingAvg, setDippingRatingAvg] = useState(0);

    const getReviewsById = () => {
        axios
            .get(`${API_URL}/reviews/?cookieId=${id}`)
            .then(({ data }) => {
                setReviews(data);

                const totalRating = data.reduce((acc, review) => acc + review.dippingRating, 0);

                const averageRating = data.length > 0 ? totalRating / data.length : 0;

                setDippingRatingAvg(averageRating);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getReviewsById();
    }, [id]);

    return (
        <Card className="card-box">
            <Card.Img className='img-card' variant="top" src={imageUrl} alt={name} />
            <Card.Body>
                <Card.Title className='txt-card'>{name}</Card.Title>
                <Card.Text className='txt-card'>{brand}</Card.Text>

                <Card.Text className='stars-box'>
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <label key={index}>
                                <FaStar
                                    className="StarRating2"
                                    size={30}
                                    color={ratingValue <= dippingRatingAvg ? "#ba8f6f" : "#ffe4c1"}
                                />
                            </label>
                        );
                    })}
                </Card.Text>
            </Card.Body>

            <Card.Body className='btn-box'>
                <Link to={`/cookie/${id}`}>
                    <Button className='btn-card' as="span">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default CookieCard;
