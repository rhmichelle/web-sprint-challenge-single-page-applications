import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';


const WrapperDiv = styled.div`
        margin-left: 10rem;
    `;

const CheckBoxDiv = styled.div`
        width: 40%;
        display: flex;
        flex-direction: column;
`;


const Pizza = () => {

    const initialFormState = {
        name: '',
        size: '',
        pepperoni: '',
        sausage: '',
        onion: '',
        greenPepper: '', 
        extraCheese: '',
        specialInstructions: ''
    }

    const [pizza, setPizza] = useState(initialFormState);
    const [errors, setErrors] = useState(initialFormState);




    const schemaCompare = yup.object().shape({
        name: yup.string().required('')
    })




    const handleChanges = (event) => {
        // console.log(event.target.value)
        const newStateObj = {...pizza, [event.target.name]:
            event.target.type === 'checkbox' ? event.target.checked : event.target.value }
        setPizza(newStateObj);
    }
    console.log('Pizza', pizza);



    const submitForm = (event) => {
        event.preventDefault()
        console.log('Form Submitted');
    }





    return (
        <WrapperDiv>
            <h1>Build Your Own Pizza</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <br>
            </br>
            <form onSubmit={submitForm}>
                <label htmlFor='First and Last Name'><h3>First and Last Name:</h3></label>
                <input
                    id='name'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={pizza.name}
                />

                <label htmlFor='Pizza Size'><h3>Pizza Size:</h3></label>
                    <select id='pizza size' name='size' onChange={handleChanges} value={pizza.size}>
                        <option value='Extra Large'>Extra Large</option>
                        <option value='Large'>Large</option>
                        <option value='Medium'>Medium</option>
                        <option value='Small'>Small</option>
                        <option value='Personal'>Tiny</option>
                    </select>

                <CheckBoxDiv>
                    <h3>Add Topings:</h3>
                    <label htmlFor='Pepperoni'>
                        Pepperoni
                        <input
                            id='Pepperoni'
                            type='checkbox'
                            name='pepperoni'
                            onChange={handleChanges}
                            value={pizza.pepperoni}
                        />
                    </label>
                    <label htmlFor='Sausage'>
                        Sausage
                        <input
                            id='Sausage'
                            type='checkbox'
                            name='sausage'
                            onChange={handleChanges}
                            value={pizza.sausage}
                        />
                    </label>
                    <label htmlFor='Onion'>
                        Onion
                        <input
                            id='Onion'
                            type='checkbox'
                            name='onion'
                            onChange={handleChanges}
                            value={pizza.onion}
                        />
                    </label>
                    <label htmlFor='Green Pepper'>
                        Green Pepper
                        <input
                            id= 'Green Pepper'
                            type='checkbox'
                            name='greenPepper'
                            onChange={handleChanges}
                            value={pizza.greenPepper}
                        />
                    </label>
                    <label htmlFor='Extra Cheese'>
                        Extra Cheese
                        <input
                            id='Extra Cheese'
                            type='checkbox'
                            name='extraCheese'
                            onChange={handleChanges}
                            value={pizza.extraCheese}
                        />
                    </label>
                </CheckBoxDiv>
                

                <label htmlFor="Special Instructions"><h3>Special Instructions</h3></label>
                    <textarea
                        id='Special Instructions'
                        name='specialInstructions'
                        onChange={handleChanges}
                        value={pizza.specialInstructions}
                    />
                <br></br>
                <button type='submit'>Place Order</button>
            </form>
        </WrapperDiv>
    )
}

export default Pizza;