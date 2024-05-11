import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import img_bg from './../../assets/add-cookie-image.jpg'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const API_URL = "http://localhost:5000"



const AddNewCookie = () =>{
    const [cookieData, setcookieData] = useState({
        image_url: "",
        brand: "",
        name: "",
        description: "",
        origin_country: "",
        buy_country: "",
        buy_supermarket: "",
        celiac: false,
        ingredients: [],
        allergen: {
          cereal: false,
          soy: false,
          wheat: false,
          milk: false
        },
        nutrients: {
          kcal: 0,
          protein: 0
        }

    })

    const navigate = useNavigate()

    const handleInputChange = (event)=>{
        const {name, value} = event.target
        setcookieData({...cookieData, [name]: value})
        console.log('Pasa el evento?????', event)
    }

    const handleCookieFormSubmit = (event) =>{
        event.preventDefault()

        axios
            .post(`${API_URL}/cookies`, cookieData)
            .then(() => navigate('/Home'))
            .catch((err)=>console.log(err))

    }

    return (
        <div className='NewCookieForm'>
            <Container>
                <Row>
                    <Col md={{span: 6}} >
                        <Form onSubmit={handleCookieFormSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    controlId="image_url"
                                    name="image_url" 
                                    placeholder="Insert image URL"  
                                    type="text" 
                                    value={cookieData.image_url} 
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control 
                                    controlId="name" 
                                    name="name"
                                    placeholder="Name of Cookie"  
                                    type='text'
                                    value={cookieData.name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control 
                                    controlId="brand" 
                                    name='brand'
                                    placeholder="Brand of Cookie" 
                                    type='text'
                                    value={cookieData.brand}
                                    onChange={handleInputChange} 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control 
                                    controlId="origin_country" 
                                    name='origin_country'
                                    placeholder="Country" 
                                    type='text'
                                    value={cookieData.origin_country}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control 
                                    controlId="buy_country" 
                                    name='buy_country'
                                    placeholder="Name of contry where was it bought..." 
                                    type='text'
                                    value={cookieData.buy_country}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control 
                                    controlId="buy_supermarket" 
                                    name='buy_supermarket'
                                    placeholder="Name of supermarket where was it bought..." 
                                    type='text'
                                    value={cookieData.buy_supermarket}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check 
                                    controlId="celiac" 
                                    name='celiac'
                                    type="checkbox" 
                                    label="Suitable for celiac?"
                                    value={cookieData.celiac}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check controlId="ingredients"  name="ingredients" type='checkbox'  label="Sugar"    value={cookieData.ingredients} onChange={handleInputChange}/>
                                <Form.Check controlId="ingredients"  name="ingredients" type='checkbox'  label="Flour"    value={cookieData.ingredients} onChange={handleInputChange}/>
                                <Form.Check controlId="ingredients"  name="ingredients" type='checkbox'  label="Choclate" value={cookieData.ingredients} onChange={handleInputChange}/>
                                <Form.Check controlId="ingredients"  name="ingredients" type='checkbox'  label="Cacao"    value={cookieData.ingredients} onChange={handleInputChange}/>
                                <Form.Check controlId="ingredients"  name="ingredients" type='checkbox'  label="Fruits"   value={cookieData.ingredients} onChange={handleInputChange}/>
                            </Form.Group>

                            // Name es allergen o su prop. de allergen???
                            <Form.Group>
                                <Form.Check controlId="cereal" name='cereal' type="switch" label="Cereal" checked={cookieData.allergen.cereal} onChange={handleInputChange}/> 
                                <Form.Check controlId="soy"    name='soy'    type="switch" label="Soy"    checked={cookieData.allergen.soy}    onChange={handleInputChange}/>
                                <Form.Check controlId="wheat"  name='wheat'  type="switch" label="Wheat"  checked={cookieData.allergen.wheat}  onChange={handleInputChange}/>
                                <Form.Check controlId="milk"   name='milk'   type="switch" label="Milk"   checked={cookieData.allergen.milk}   onChange={handleInputChange}/>
                            </Form.Group>

                            // Name es nutrients o su prop. de nutrients???
                            <Form.Group className="mb-3">
                                <Form.Control controlId="nutrients" name='nutrients' type="number"  placeholder="Kcal amount"    value={cookieData.nutrients.kcal} onChange={handleInputChange}/>
                                <Form.Control controlId="nutrients" name='nutrients' type="number"  placeholder="Protein amount" value={cookieData.nutrients.protein} onChange={handleInputChange}/>
                            </Form.Group>
                            <Button type="submit">Submit</Button>

                        </Form>
                    </Col>

                    <Col md ={{span: 6}}>
                        <img src={img_bg} alt="Cookies" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AddNewCookie