import { Col, Row } from "react-bootstrap"
import CookieCard from "../CookieCard/CookieCard"

const API_URL = import.meta.env.VITE_API_URL

const CookiesList = ({isLoading, cookies}) => {

    return (
        <div className="CookiesList" >
            {
                isLoading ?
                    <h1>Cargando...</h1>
                    :
                    <>
            
                    <Row className="mt-5">
                        {
                            cookies.map((eachCookie) => {
                                return (
                                    <Col md={{ span: 3 }} key={eachCookie.id}>
                                        <CookieCard {...eachCookie}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    </>
            }
        </div >

    )
}
export default CookiesList

