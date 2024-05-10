// import CookiesCard from '../CookiesCard/CookiesCard'
import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import CookiesCard from "../CookiesCard/CookiesCard"


const API_URL = "http://localhost:5000"

const CookiesList = () => {

    const [cookies, setCookies] = useState([])

    useEffect(() => {
        getAllCookies()
    }, [])

    const getAllCookies = () => {
        axios
            .get(`${API_URL}/cookies`)
            .then(({ data }) => setCookies(data))
            .catch((err) => console.log(err))

    }

    return (

        <div className="CookiesList" >

            <Row className="mt-5">

                {
                    cookies.map((eachCookie) => {
                        return (
                            <Col md={{ span: 3 }} key={eachCookie.id}>
                                <CookiesCard {...eachCookie} />
                            </Col>
                        )
                    })
                }

            </Row>
        </div >

    )
}
export default CookiesList

