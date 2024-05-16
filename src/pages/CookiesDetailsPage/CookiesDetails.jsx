import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Row, ListGroup, Button, Container, Spinner, Collapse } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ReviewsListById from "../../components/ReviewsListById/ReviewsListById"
import AddNewReview from "../../components/AddNewReview/AddNewReview"
import './CookiesDetails.css'

const API_URL = import.meta.env.VITE_API_URL

const CookiesDetailsPage = () => {

    const [cookie, setCookie] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const [reviews, setReviews] = useState([])

    const [open, setOpen] = useState(false);

    const [isLoadingReviews, setIsLoadingReviews] = useState(true);

    const navigate = useNavigate()

    const { cookieId } = useParams()

    useEffect(() => {
        loadCookie()
        getAllReviews()
    }, [])

    const deleteCookie = () => {
        axios
            .delete(`${API_URL}/cookie/${cookieId}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

    const loadCookie = () => {
        axios
            .get(`${API_URL}/cookie/${cookieId}`)
            .then(({ data }) => {
                setCookie(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const getAllReviews = () => {
        axios
            .get(`${API_URL}/cookie/${cookieId}?_embed=reviews`)
            .then(({ data }) => {
                setReviews(data.reviews);
                setIsLoadingReviews(false);
            })
            .catch((err) => console.log(err));
    };


    return (

        <>
            {
                isLoading
                ?
                <Spinner animation="border" />
                :
                <>
                <Container className="container-details">
                    <Row>
                        <Col md={{ span: 6}}>
                            <img src={cookie.imageUrl}></img>
                        </Col>

                        <Col md={{span: 6}}>
                            <div className="titles">
                                <h2>{cookie.name}</h2>
                                <h3>Brand : {cookie.brand}</h3>
                            </div>

                            <Row>
                                <Col md={{span: 6}}>
                                    <div className="txt-card-details">
                                        <p>Origin Country : {cookie.originCountry}</p>
                                        <p>Bought in : {cookie.buyCountry}</p>
                                        <p>Available in : {cookie.buySupermarket}</p>

                                        <p>Suitable for Celiac :
                                            {
                                                <strong> {cookie.celiac ? " Yes " : " No"}</strong>
                                            }
                                        </p>
                                    </div>
                                </Col>

                                <Col md={{span: 6}}>
                                    <div className="components-description txt-card-details">
                                        <p>Ingredients : </p>
                                        <ul>
                                            {
                                                cookie.ingredients?.map((elm) => {
                                                    return <li key={elm}>{elm}</li>
                                                })
                                            }
                                        </ul>
                                        <p>Allergens : </p>
                                        <ol>
                                            <li>{cookie.allergen?.cereal ? " Contains cereal " : " Not contains cereal"}</li>
                                            <li>{cookie.allergen?.soy ? " Contains soy " : " Not contains soy"}</li>
                                            <li>{cookie.allergen?.wheat ? " Contains wheat " : " Not contains wheat"}</li>
                                            <li>{cookie.allergen?.milk ? " Contains milk " : " Not contains milk"}</li>
                                        </ol>
                                        <p>Nutrients : </p>
                                        <ul>
                                            <li>Kilocalories : {cookie.nutrients?.kcal}</li>
                                            <li>Protein : {cookie.nutrients?.protein}</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{ span: 12 }} className="txt-card-details components-description">

                            <Button className="btn-description" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                                Description
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text" className="txt-card-details">
                                    {cookie.description}
                                </div>
                            </Collapse>

                        </Col>
                    </Row>
                       
                    <Row>
                        <Col md={{offset:8,  span: 4}} >
                            <Link to={`/cookie/edit/${cookieId}`}>
                                <Button className="edit-delete" size="sm">
                                    Edit cookie's details
                                </Button>
                            </Link>
                            <Button
                                className="edit-delete" 
                                size="sm"
                                as="span"
                                onClick={deleteCookie}>Delete Cookie
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <AddNewReview getAllReviews={getAllReviews} />
                    <ReviewsListById reviews={reviews} getAllReviews={getAllReviews} />
                </Container>
                </>
            }
        </>

    )
}
export default CookiesDetailsPage