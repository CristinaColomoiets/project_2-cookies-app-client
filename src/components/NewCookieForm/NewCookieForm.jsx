import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const API_URL = "http://localhost:5000"



const NewCookieForm = () => {

    const navigate = useNavigate()

    const [cookieData, setcookieData] = useState({
        imageUrl: "",
        brand: "",
        name: "",
        description: "",
        originCountry: "",
        buyCountry: "",
        buySupermarket: "",
        celiac: false,
        ingredients: [],
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
        setcookieData({ ...cookieData, ingredients: ingredientsCopy });
    }

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target
        const inputValue = type === 'checkbox' ? checked : value
        setcookieData({ ...cookieData, [name]: inputValue })
    }

    const handleCookieFormSubmit = (event) => {
        event.preventDefault()

        const fullCookieData = {
            ...cookieData,
            nutrients: nutrientsData,
            allergen: allergenData
        }

        axios
            .post(`${API_URL}/cookie`, fullCookieData)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))

    }


    return (
        <div className='NewCookieForm'>
            <Form onSubmit={handleCookieFormSubmit}>
                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Control
                        name="imageUrl"
                        placeholder="Insert image URL"
                        type="text"
                        value={cookieData.imageUrl}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                        name="name"
                        placeholder="Name of Cookie"
                        type='text'
                        value={cookieData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="brand">
                    <Form.Control
                        name='brand'
                        placeholder="Brand of Cookie"
                        type='text'
                        value={cookieData.brand}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="originCountry">
                    <Form.Control
                        name='originCountry'
                        placeholder="Country"
                        type='text'
                        value={cookieData.originCountry}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="buyCountry">
                    <Form.Control
                        name='buyCountry'
                        placeholder="Name of contry where was it bought..."
                        type='text'
                        value={cookieData.buyCountry}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="buySupermarket">
                    <Form.Control
                        name='buySupermarket'
                        placeholder="Name of supermarket where was it bought..."
                        type='text'
                        value={cookieData.buySupermarket}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="celiac">
                    <Form.Check
                        name='celiac'
                        type="checkbox"
                        label="Suitable for celiac?"
                        checked={cookieData.celiac}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ingredients">
                    <Form.Check name="Sugar" type='checkbox' label="Sugar" value="Sugar" checked={cookieData.ingredients.includes('Sugar')} onChange={handleIngredientsChange} />
                    <Form.Check name="Flour" type='checkbox' label="Flour" value="Flour" checked={cookieData.ingredients.includes('Flour')} onChange={handleIngredientsChange} />
                    <Form.Check name="Chocolate" type='checkbox' label="Chocolate" value="Chocolate" checked={cookieData.ingredients.includes('Chocolate')} onChange={handleIngredientsChange} />
                    <Form.Check name="Cacao" type='checkbox' label="Cacao" value="Cacao" checked={cookieData.ingredients.includes('Cacao')} onChange={handleIngredientsChange} />
                    <Form.Check name="Fruits" type='checkbox' label="Fruits" value="Fruits" checked={cookieData.ingredients.includes('Fruits')} onChange={handleIngredientsChange} />
                </Form.Group>

                <Form.Group controlId="allergen">
                    <Form.Check name='cereal' type="switch" label="Cereal" checked={allergenData.cereal} onChange={handleAllergenChande} />
                    <Form.Check name='soy' type="switch" label="Soy" checked={allergenData.soy} onChange={handleAllergenChande} />
                    <Form.Check name='wheat' type="switch" label="Wheat" checked={allergenData.wheat} onChange={handleAllergenChande} />
                    <Form.Check name='milk' type="switch" label="Milk" checked={allergenData.milk} onChange={handleAllergenChande} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nutrients" >
                    <Form.Label>{'Put kcal amount please'}</Form.Label>
                    <Form.Control name='kcal' type="number" value={nutrientsData.kcal} onChange={handleNutrientsChange} />

                    <Form.Label>{'Put protein amount please'}</Form.Label>
                    <Form.Control name='protein' type="number" value={nutrientsData.protein} onChange={handleNutrientsChange} />
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default NewCookieForm