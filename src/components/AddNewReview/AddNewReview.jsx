import { useState } from "react"
import { FloatingLabel, Form, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import axios from "axios"


const API_URL = "http://localhost:5000"

const AddNewReview = () => {

    const { cookieId } = useParams()


    const [reviewData, setReviewData] = useState({
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
            .post(`${API_URL}/reviews/${cookieId}`, reviewData)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))

    }


    return (
        <div className="NewReviewForm mt-3">

            <Form onSubmit={handleReviewSubmit}>

                <Form.Group
                >
                    <FloatingLabel controlId="userName"
                    >

                        <Form.Control
                            className="mb-3"

                            label="Add your Name"
                            type="text"
                            name="userName"
                            value={reviewData.userName}
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>


                </Form.Group>

                <FloatingLabel
                    controlId="floatingTextarea2"

                >
                    <Form.Control
                        as="textarea"
                        label="Add your review"
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