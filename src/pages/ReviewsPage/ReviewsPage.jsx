import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ReviewCard from "../../components/ReviewCard/ReviewCard"

const API_URL = import.meta.env.VITE_API_URL

const ReviewsPage = () => {

    const [reviewData, setReviewData] = useState([])

    useEffect(() => {
        getAllReviews()
    }, [])

    const getAllReviews = () => {
        return (
            axios
                .get(`${API_URL}/reviews`)
                .then(({ data }) => setReviewData(data))
                .catch((err) => console.log(err))
        )
    }

    return (
        <div className="ReviewsPage">
            <Container>
                <Row>
                    <Col>

                        {

                            reviewData.map((elm) => {
                                return (

                                    <ReviewCard key={elm.id} {...elm} />
                                )
                            })
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ReviewsPage