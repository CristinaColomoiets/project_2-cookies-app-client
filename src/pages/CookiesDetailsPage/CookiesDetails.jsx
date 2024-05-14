import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Row, Container, ListGroup, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ReviewsList from "../../components/ReviewsList/ReviewsList"

const API_URL = "http://localhost:5000"

const CookiesDetailsPage = () => {

    const navigate = useNavigate()

    const deleteCookie = () => {
        axios
            .delete(`${API_URL}/cookie/${cookieId}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

    const [cookie, setCookie] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const { cookieId } = useParams()

    useEffect(() => {
        loadCookie()
    }, [])

    const loadCookie = () => {
        axios
            .get(`${API_URL}/cookie/${cookieId}`)
            .then(({ data }) => {
                setCookie(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    return (

        <Container className="mt-5">

            <Link to="/">
                <Button as="span" variant="primary" size="sm">
                    Go Back
                </Button>
            </Link>

            {
                isLoading
                    ?
                    <h1>CARGANDO...</h1>
                    :
                    <Row>

                        <Col md={{ span: 4, offset: 2 }}>
                            <img src={cookie.imageUrl}></img>
                        </Col>

                        <Col md={{ span: 2 }}>

                            <ListGroup className="mt-0">
                                <h2>{cookie.name}</h2>

                                <hr />

                                <h5>Brand : {cookie.brand}</h5>
                                <p>Origin Country : {cookie.originCountry}</p>
                                <p>Bought in : {cookie.buyCountry}</p>
                                <p>Available in : {cookie.buySupermarket}</p>

                                <p>Suitable for Celiac :
                                    {
                                        <strong> {cookie.celiac ? " Yes " : " No"}</strong>
                                    }
                                </p>


                            </ListGroup>
                        </Col>

                        <Button variant="secondary" size="sm">
                            Edit cookie's details
                        </Button>

                        <ListGroup className="mt-0">

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
                        </ListGroup>

                        <Button
                            variant="secondary"
                            size="sm"
                            as="span"
                            onClick={deleteCookie}>Delete Cookie
                        </Button>




                        <Col md={{ span: 12 }}>
                            <p>{cookie.description}</p>
                        </Col>


                        <Col md={{ span: 12 }}>
                            <h4>"Aqui van todos los comentarios"</h4>
                            <ReviewsList />
                        </Col>

                    </Row>
            }



        </Container>

    )
}
export default CookiesDetailsPage