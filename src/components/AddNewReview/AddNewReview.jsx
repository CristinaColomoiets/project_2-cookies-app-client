import { useState } from "react"
import { FloatingLabel, Container, Form, Row, Col } from "react-bootstrap"


const API_URL = "http://localhost:5000"

const AddNewReview = () => {

    const [reviewData, setReviewData] = useState({
        like: false,
        dipping_rating: 1,
        user_name: "",
        comment_text: ""
    })


    const handleInputChange = event => {
        const { name, value } = event.target
        setReviewData({ ...reviewData, [name]: value })
    }


    return (
        <div className="NewReviewForm mt-3">
            <Container>
                <Row>
                    <Col md={{ span: 12 }}>


                        <Form.Group className="mb-3"
                            controlId="userName"

                        >
                            <Form.Label
                                label="User-name"
                            > </Form.Label>
                            <Form.Control
                                type="text"

                                name="user_name"
                                value={reviewData.user_name}
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
                                value={reviewData.comment_text}
                                onChange={handleInputChange}
                            />
                        </FloatingLabel>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddNewReview