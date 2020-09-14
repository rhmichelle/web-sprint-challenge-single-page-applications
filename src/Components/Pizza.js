import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Pizza = () => {
    const [pizza, setPizza] = useState({
        name: '',
        size: '',
        pepperoni: '',
        sausage: '',
        onion: '',
        greenPepper: '', 
        extraCheese: '',
        specialInstructions: ''
    })

    const handleChanges = (event) => {
        // console.log(event.target.value)
        const newStateObj = {...pizza, [event.target.name]:
            event.target.type === 'checkbox' ? event.target.checked : event.target.value }
        setPizza(newStateObj);
    }
    console.log('Pizza', pizza);


    return (
        <div>
            <h1>Build Your Own Pizza</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <br>
            </br>

            <label htmlFor='First and Last Name'><h3>First and Last Name:</h3></label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={pizza.name}
            />

            <label htmlFor='Pizza Size'>Pizza Size</label>
                <h3>Choice of Size</h3>
                <select id='pizza size' name='size' onChange={handleChanges} value={pizza.size}>
                    <option value='Extra Large'>Extra Large</option>
                    <option value='Large'>Large</option>
                    <option value='Medium'>Medium</option>
                    <option value='Small'>Small</option>
                    <option value='Personal'>Tiny</option>
                </select>


            <h3>Add Topings</h3>
            <label htmlFor='Pepperoni'>Pepperoni</label>
                <input
                    id='Pepperoni'
                    type='checkbox'
                    name='pepperoni'
                    onChange={handleChanges}
                    value={pizza.pepperoni}
                />
            <label htmlFor='Sausage'>Sausage</label>
                <input
                    id='Sausage'
                    type='checkbox'
                    name='sausage'
                    onChange={handleChanges}
                    value={pizza.sausage}
                />
            <label htmlFor='Onion'>Onion</label>
                <input
                    id='Onion'
                    type='checkbox'
                    name='onion'
                    onChange={handleChanges}
                    value={pizza.onion}
                />
            <label htmlFor='Green Pepper'>Green Pepper</label>
                <input
                    id= 'Green Pepper'
                    type='checkbox'
                    name='greenPepper'
                    onChange={handleChanges}
                    value={pizza.greenPepper}
                />
            <label htmlFor='Extra Cheese'>Extra Cheese</label>
                <input
                    id='Extra Cheese'
                    type='checkbox'
                    name='extraCheese'
                    onChange={handleChanges}
                    value={pizza.extraCheese}
                />

            

            <h3>Special Instructions</h3>
            <label htmlFor="Special Instructions">Special Instructions</label>
                <textarea
                    id='Special Instructions'
                    name='specialInstructions'
                    onChange={handleChanges}
                    value={pizza.specialInstructions}
                />

        </div>
    )
}

export default Pizza;