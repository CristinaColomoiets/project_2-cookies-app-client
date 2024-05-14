import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import CookieCard from "../CookieCard/CookieCard"


const API_URL = "http://localhost:5000"

const CookiesList = () => {

    const [cookies, setCookies] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getAllCookies()
    }, [])


    const getAllCookies = () => {
        axios
            .get(`${API_URL}/cookies`)
            .then(({ data }) => setCookies(data))
            .catch((err) => console.log(err))
            setIsLoading(false)
    }

    return (
        <div className="CookiesList" >
            {
                isLoading?
                <h1>Cargando...</h1>
                :
                <Row className="mt-5">

                    {
                        cookies.map((eachCookie) => {
                            return (
                                <Col md={{ span: 3 }} key={eachCookie.id}>
                                    <CookieCard {...eachCookie} getAllCookies={getAllCookies} />
                                </Col>
                            )
                        })
                    }

                </Row>
            }
        </div >

    )
}
export default CookiesList

