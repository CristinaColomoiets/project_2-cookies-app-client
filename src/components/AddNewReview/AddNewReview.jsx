import { useState } from "react";
import { FloatingLabel, Form, Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import LikeButton from "../LikeButton/LikeButton";
import StarRating from "../StarRating/StarRating";
import "./AddNewReview.css";

const API_URL = import.meta.env.VITE_API_URL;

const AddNewReview = ({ getAllReviews }) => {

    const { cookieId } = useParams();

    const [reviewData, setReviewData] = useState({
        cookieId: Number(cookieId),
        like: false,
        dippingRating: 0,
        userName: "",
        commentText: ""
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setReviewData({ ...reviewData, [name]: value });
    };

    const handleRatingChange = (value) => {
        setReviewData({ ...reviewData, dippingRating: value });
    };

    const handleLikeChange = (checked) => {
        setReviewData({ ...reviewData, like: checked });
    };

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        axios
            .post(`${API_URL}/reviews`, reviewData)
            .then(() => getAllReviews())
            .catch((err) => console.log(err));
    };

    return (
        <div className="NewReviewForm mt-3">
            <Form onSubmit={handleReviewSubmit}>
                <Form.Group>
                    <Row className="align-items-center mb-3">
                        <Col xs="auto">
                            <StarRating setRating={handleRatingChange} />
                        </Col>
                        <Col xs="auto">
                            <LikeButton className="like-button"
                                checked={reviewData.like}
                                setLike={handleLikeChange} />
                        </Col>
                    </Row>
                </Form.Group>
                    <Form.Control
                        className="inputReview"
                        placeholder="Add your Name"
                        type="text"
                        name="userName"
                        value={reviewData.userName}
                        onChange={handleInputChange}
                    />
                    <Form.Control
                        as="textarea"
                        name="commentText"
                        placeholder="Add your review"
                        className="inputReview"
                        value={reviewData.commentText}
                        onChange={handleInputChange}
                    />
                <Button className="btn-reviews" type="submit">Add Review</Button>
            </Form>
        </div>
    );
};

export default AddNewReview;
