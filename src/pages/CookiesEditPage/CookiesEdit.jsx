import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import './CookiesEdit.css'


const API_URL = import.meta.env.VITE_API_URL

const CookiesEditPage = () => {

    const [cookieData, setCookieData] = useState({
        imageUrl: "",
        brand: "",
        name: "",
        description: "",
        originCountry: "",
        buyCountry: "",
        buySupermarket: "",
        celiac: false,
        ingredients: [],
        forKids: false
    })

    const [allergenData, setAllergenData] = useState({
        cereal: false,
        soy: false,
        wheat: false,
        milk: false
    })

    const [nutrientsData, setNutrientsData] = useState({
        kcal: 0,
        protein: 0,
    })

    // Ejecutamos la fn que trae los datos de API para Form
    useEffect(() => {
        loadFormData()
    }, [])

    const { cookieId } = useParams()
    const navigate = useNavigate()

    // 2. Rellenamos el Form con los datos de API
    const loadFormData = () => {
        axios
            .get(`${API_URL}/cookie/${cookieId}`)
            .then(({ data }) => setCookieData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target
        const inputValue = type === 'checkbox' ? checked : value
        setCookieData({ ...cookieData, [name]: inputValue })
    }

    const handleAllergenChande = (event) => {
        const { name, checked } = event.target
        setAllergenData({ ...allergenData, [name]: checked })
    }

    const handleNutrientsChange = (event) => {
        const { name, value } = event.target
        setNutrientsData({ ...nutrientsData, [name]: value })
    }

    const handleIngredientsChange = (event) => {

        const { value, checked } = event.target
        let ingredientsCopy = [];
        ingredientsCopy = [...cookieData.ingredients, value]

        if (checked) {
            ingredientsCopy.push(value)
        } else {

            ingredientsCopy = ingredientsCopy.filter(ingredient => ingredient !== value);
        }
        setCookieData({ ...cookieData, ingredients: ingredientsCopy });
    }

    const handleFormSubmit = ((event) => {
        event.preventDefault()

        const fullCookieData = {
            ...cookieData,
            nutrients: nutrientsData,
            allergen: allergenData
        }

        axios
            .put(`${API_URL}/cookie/${cookieId}`, fullCookieData)
            .then(() => navigate(`/cookie/${cookieId}`))
            .catch((err) => console.log(err))
    })


    return (
        <div>
            <Container className='container-edit-form'>
                <Row className='form-edit-row'>
                    <Col md={{ span: 6 }}>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="imageUrl">
                                <Form.Control
                                    className='input-edit'
                                    name="imageUrl"
                                    placeholder="Insert image URL"
                                    type="text"
                                    value={cookieData.imageUrl}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control
                                    className='input-edit'
                                    name="name"
                                    placeholder="Name of Cookie"
                                    type='text'
                                    value={cookieData.name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="brand">
                                <Form.Control
                                    className='input-edit'
                                    name='brand'
                                    placeholder="Brand of Cookie"
                                    type='text'
                                    value={cookieData.brand}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="originCountry">
                                <Form.Control
                                    className='input-edit'
                                    name='originCountry'
                                    placeholder="Country"
                                    type='text'
                                    value={cookieData.originCountry}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="buyCountry">
                                <Form.Control
                                    className='input-edit'
                                    name='buyCountry'
                                    placeholder="Name of contry where was it bought..."
                                    type='text'
                                    value={cookieData.buyCountry}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="buySupermarket">
                                <Form.Control
                                    className='input-edit'
                                    name='buySupermarket'
                                    placeholder="Name of supermarket where was it bought..."
                                    type='text'
                                    value={cookieData.buySupermarket}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className='input-edit' controlId="celiac">
                                <Form.Check
                                    className='input-edit'
                                    name='celiac'
                                    type="checkbox"
                                    label="Suitable for celiac?"
                                    checked={cookieData.celiac}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="forKids">
                                <Form.Check
                                    className='input-edit'
                                    name='forKids'
                                    type="checkbox"
                                    label="Suitable for kids?"
                                    checked={cookieData.forKids}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className='input-edit' controlId="ingredients" >
                                <Form.Check name="Sugar" type='checkbox' label="Sugar" value="Sugar" checked={cookieData.ingredients.includes('Sugar')} onChange={handleIngredientsChange} />
                                <Form.Check name="Flour" type='checkbox' label="Flour" value="Flour" checked={cookieData.ingredients.includes('Flour')} onChange={handleIngredientsChange} />
                                <Form.Check name="Chocolate" type='checkbox' label="Chocolate" value="Chocolate" checked={cookieData.ingredients.includes('Chocolate')} onChange={handleIngredientsChange} />
                                <Form.Check name="Cacao" type='checkbox' label="Cacao" value="Cacao" checked={cookieData.ingredients.includes('Cacao')} onChange={handleIngredientsChange} />
                                <Form.Check name="Fruits" type='checkbox' label="Fruits" value="Fruits" checked={cookieData.ingredients.includes('Fruits')} onChange={handleIngredientsChange} />
                            </Form.Group>

                            <Form.Group controlId="allergen" className='input-edit'>
                                <Form.Check name='cereal' type="switch" label="Cereal" checked={allergenData.cereal} onChange={handleAllergenChande} />
                                <Form.Check name='soy' type="switch" label="Soy" checked={allergenData.soy} onChange={handleAllergenChande} />
                                <Form.Check name='wheat' type="switch" label="Wheat" checked={allergenData.wheat} onChange={handleAllergenChande} />
                                <Form.Check name='milk' type="switch" label="Milk" checked={allergenData.milk} onChange={handleAllergenChande} />
                            </Form.Group>

                            <Form.Group className='input-edit' controlId="nutrients">
                                <Form.Label>{'Put kcal amount please'}</Form.Label>
                                <Form.Control name='kcal' type="number" value={nutrientsData.kcal} onChange={handleNutrientsChange} />

                                <Form.Label>{'Put protein amount please'}</Form.Label>
                                <Form.Control name='protein' type="number" value={nutrientsData.protein} onChange={handleNutrientsChange} />
                            </Form.Group>

                            <FloatingLabel>
                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Control
                                        className='input-edit'
                                        name='description'
                                        placeholder="Description"
                                        type='text'
                                        value={cookieData.description}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </FloatingLabel>

                            <Button className='btn-submit' type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
                <Link className='btn-back' to="/cookie">Back to the list of cookies</Link>
            </Container>
        </div>
    )
}
export default CookiesEditPage