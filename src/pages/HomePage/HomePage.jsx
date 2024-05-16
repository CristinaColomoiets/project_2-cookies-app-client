import { Container, Row, Col, Button } from "react-bootstrap"
import CookiesList from "../../components/CookiesList/CookiesList"
import axios from "axios"
import { useState, useEffect } from "react"


const HomePage = () => {

    const API_URL = import.meta.env.VITE_API_URL

    const [cookies, setCookies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllCookies()
    }, [])

    const getAllCookies = () => {
        axios
            .get(`${API_URL}/cookie`)
            .then(({ data }) => {
                setIsLoading(false)
                setCookies(data)
            })
            .catch((err) => console.log(err))
    }

    const getKidsCookies = () => {
        axios
            .get(`${API_URL}/cookie?forKids=true`)
            .then(({ data }) => {
                setIsLoading(false)
                setCookies(data)
            })
            .catch((err) => console.log(err))
    }

    const getCeliacCookies = () => {
        axios
            .get(`${API_URL}/cookie?celiac=true`)
            .then(({ data }) => {
                setIsLoading(false)
                setCookies(data)
            })
            .catch((err) => console.log(err))
    }

    const getBestDippingCookies = () => {
        axios
            .get(`${API_URL}/cookie?celiac=true`)
            .then(({ data }) => {
                setIsLoading(false)
                setCookies(data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="HomePage">
            <Container>
                <Row>
                    <Col md={{span: 3}}>
                        <Button as='span' variant="outline-success" onClick={getAllCookies}>All cookies</Button>
                    </Col>

                    <Col md={{span: 3}}>
                        <Button as='span' variant="outline-success" onClick={getKidsCookies}>For Kids</Button>
                    </Col>
                    
                    <Col md={{span: 3}}>
                        <Button as='span' variant="outline-success" onClick={getCeliacCookies}>For celiac</Button>
                    </Col>
                    
                    <Col md={{span: 3}}>
                        <Button as='span' variant="outline-success">Best dipping</Button>
                        {/* onClick={getBestDippingCookies} */}
                    </Col>
                </Row>
                <CookiesList isLoading={isLoading}  cookies={cookies}/>
            </Container>

        </div>
    )
}
export default HomePage