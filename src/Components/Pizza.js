import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';


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
        pepperoni: false,
        sausage: false,
        onion: false,
        greenPepper: false, 
        extraCheese: false,
        specialInstructions: ''
    }

    const [pizza, setPizza] = useState(initialFormState);
    const [errors, setErrors] = useState(initialFormState);
    // console.log('Errors', errors.name)


    const schemaCompare = yup.object().shape({
        name: yup
            .string()
            .required('Name needed')
            .min(2),
        size: yup.string().required().oneOf(['Extra Large', 'Large', 'Medium', 'Small', 'Tiny']),
        pepperoni: yup.bool().required(),
        sausage: yup.bool(),
        onion: yup.bool(),
        greenPepper: yup.boolean(),
        extraCheese: yup.boolean(),
        specialInstructions: yup.string()
    });


    const validateChange = event => {
        yup
            .reach(schemaCompare, event.target.name)
            .validate(event.target.value)
            .then(valid => {
            setErrors({...errors, [event.target.name]: ''})
        })
        .catch(error => {
            console.log('error!', error)
            setErrors({...errors, [event.target.name]: error.errors[0] });
    })
};


    useEffect(() => {
        schemaCompare
            .isValid(initialFormState)
            .then(valid => {
            // console.log("valid?", valid);
        })
    }, [initialFormState])




    const handleChanges = (event) => {
        // console.log(event.target.value)
        event.persist();
        const newStateObj = {...pizza, [event.target.name]:
            event.target.type === 'checkbox' ? event.target.checked : event.target.value }
        validateChange(event);
        setPizza(newStateObj);
    }
    // console.log('Pizza', pizza);



    function submitForm(event) {
        event.preventDefault();
        
        axios
        .post('https://reqres.in/api/users', pizza)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })

        setPizza(initialFormState);
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
                {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
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