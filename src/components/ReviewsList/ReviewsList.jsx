import axios from "axios"
import { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
import ReviewCard from "../ReviewCard/ReviewCard"
import { useParams } from "react-router-dom"

// TODO: IMPLEMENTAR ESTADO DE CARGA

const API_URL = "http://localhost:5000"

const ReviewsList = ({ reviews, isLoading }) => {

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
export default ReviewsList

