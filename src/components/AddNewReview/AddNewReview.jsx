import { useState } from "react"
import { FloatingLabel, Container, Form, Row, Col } from "react-bootstrap"


const API_URL = "http://localhost:5000"

const AddNewReview = () => {

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


    return (
        <div className="NewReviewForm mt-3">

            <Form.Group className="mb-3"
                controlId="userName"
            >
                <Form.Label
                    label="User-name"
                > </Form.Label>
                <Form.Control
                    type="text"

                    name="user_name"
                    value={reviewData.userName}
                    onChange={handleInputChange}
                />
            </Form.Group>



            <FloatingLabel
                controlId="floatingTextarea2"
                label="Add your review"

            >
                <Form.Control
                    as="textarea"
                    style={{ height: '100px' }}
                    name="comment_text"
                    value={reviewData.commentText}
                    onChange={handleInputChange}
                />
            </FloatingLabel>

    
        </div>
    )
}

export default AddNewReview