import { Row } from "react-bootstrap"
import ReviewCard from "../ReviewCard/ReviewCard"

const ReviewsListById = ({ reviews, isLoading }) => {

    return (
        <div className="ReviewsList" >



            <Row className="mt-5">

                {
                    isLoading
                        ?
                        <h1>CARGANDO...</h1>
                        :
                        reviews.map(elm => <ReviewCard key={elm.id} {...elm} />)
                }

            </Row>
        </div >

    )
}
export default ReviewsListById

