import { useState } from "react"
import { FloatingLabel, Form, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"


const API_URL = "http://localhost:5000"

const AddNewReview = ({ getAllReviews }) => {

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
    )
}

export default AddNewReview