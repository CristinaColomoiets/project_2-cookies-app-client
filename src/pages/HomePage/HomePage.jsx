import { Container, Row, Col, Button } from "react-bootstrap"
import CookiesList from "../../components/CookiesList/CookiesList"
import { useState } from "react"
import axios from "axios"

const HomePage = () => {

    const API_URL = import.meta.env.VITE_API_URL

    const [cookies, setCookies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getCeliacCookies = () => {
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
                    <Col md={{span: 4}}>
                        <Button as='span' variant="outline-success">For Kids</Button>
                    </Col>
                    
                    <Col md={{span: 4}}>
                        <Button as='span' variant="outline-success" onClick={getCeliacCookies}>For celiac</Button>
                    </Col>
                    
                    <Col md={{span: 4}}>
                        <Button as='span' variant="outline-success">Best dipping</Button>
                    </Col>
                </Row>
                <CookiesList isLoading={isLoading}  cookies={cookies} getCeliacCookies={getCeliacCookies}/>
            </Container>

        </div>
    )
}
export default HomePage