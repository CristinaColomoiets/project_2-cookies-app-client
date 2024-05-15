import axios from 'axios'
import {Form, Button, Card, CardBody, ListGroup} from 'react-bootstrap';
import {useState} from 'react'


const CookiesSearch = ()=>{

    const API_URL = "http://localhost:5000"

    const [cookiesData, setCookiesData] = useState([])
    const [cookieQuery, setCookieQuery] = useState('')

    const handleFilterChange = (event)=>{
        const {value} = event.target;
        setCookieQuery(value)
        filterCookies(value)
    }

    const filterCookies = (nameQuery) =>{
        axios.get(`${API_URL}/cookie/?name_like=${nameQuery}`)
        .then(({data})=> setCookiesData(data))
        .catch((error)=>console.log(error))
    }

    return (
        <div className="containerSearch">
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange = {handleFilterChange}
                    value={cookieQuery}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <ListGroup>
                {
                    cookiesData.map((elm)=>{
                    <Card style={{ width: '18rem' }}>
                        <CardBody key={elm.id}>
                            <Card.Img variant="top" src={elm.imageUrl} />
                            <Card.Title>{elm.name}</Card.Title>
                            <Card.Title>{elm.brand}</Card.Title>
                            <Button variant="primary">Choose cookie</Button>
                        </CardBody>
                    </Card>
                    })
                }
            </ListGroup>
        </div>
    )
}
export default CookiesSearch