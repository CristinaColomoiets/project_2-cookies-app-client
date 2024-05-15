import { useState } from "react"
import { FloatingLabel, Form, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import axios from "axios"
import { FaStar } from "react-icons/fa"


const API_URL = "http://localhost:5000"

const AddNewReview = ({ getAllReviews }) => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const { cookieId } = useParams()

    const [reviewData, setReviewData] = useState({
        cookieId: cookieId,
        like: false,
        dippingRating: 1,
        userName: "",
        commentText: ""
    })


    const handleInputChange = event => {
        const { name, value } = event.target
        setReviewData({ ...reviewData, [name]: value })
    }

    const handleReviewSubmit = (event) => {
        event.preventDefault()

        axios
            .post(`${API_URL}/reviews`, reviewData)
            .then(() => getAllReviews())
            .catch((err) => console.log(err))

    }



    return (

        <>
            <div className="StarRating">
                {[...Array(5).map((star, index) => {

                    const currentRating = index + 1

                    return (
                        <label>
                            <input
                                type="radio"
                                name="dippingRating"

                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                            />
                            <FaStar
                                className="star"
                                size={30}
                                color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })]}
            </div>
            <div className="NewReviewForm mt-3">


                <Form onSubmit={handleReviewSubmit}>

                    <Form.Group>
                        <FloatingLabel
                            controlId="userName"
                            label="Add your Name"
                        >

                            <Form.Control
                                className="mb-3"
                                type="text"
                                name="userName"
                                value={reviewData.userName}
                                onChange={handleInputChange}
                            />

                        </FloatingLabel>


                    </Form.Group>

                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Add your review"

                    >
                        <Form.Control
                            as="textarea"

                            name="commentText"
                            className="mb-3"
                            value={reviewData.commentText}
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>

                    <Button type="submit">Add Review</Button>

                </Form>


            </div>
        </>
    )
}

export default AddNewReview