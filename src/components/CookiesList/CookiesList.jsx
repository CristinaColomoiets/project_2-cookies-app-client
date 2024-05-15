import axios from "axios"
import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import CookieCard from "../CookieCard/CookieCard"

const API_URL = import.meta.env.VITE_API_URL

const CookiesList = ({getCeliacCookies}) => {

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

    return (
        <div className="CookiesList" >
            {
                isLoading ?
                    <h1>Cargando...</h1>
                    :
                    <>
                    {/* COOKIES FILTER AQUI */}
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
                    </>
            }
        </div >

    )
}
export default CookiesList

