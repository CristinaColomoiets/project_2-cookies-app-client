import NewCookieForm from "../../components/NewCookieForm/NewCookieForm"
import img_bg from './../../assets/add-cookie-image.jpg'
import { Container, Row, Col } from 'react-bootstrap'

const CookiesFormPage = () => {
    return (
        <div className="CookiesFormPage">

            <Container>
                <h1>Add new cookie</h1>
        
                <Row>
                    <Col md={{ span: 6 }} >

                        <NewCookieForm />

                    </Col>

                    <Col md={{ span: 6 }}>
                        <img src={img_bg} alt="Cookies" />
                    </Col>

                </Row>

            </Container>
        </div>
    )
}
export default CookiesFormPage