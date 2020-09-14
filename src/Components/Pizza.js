import React from 'react';
import { Link } from 'react-router-dom';

// const [pizza, setPizza] = useState([
//     {
//         name: '',
//         size: '',

//     }
// ])

const Pizza = () => {
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
            />

            <label htmlFor='Pizza Size' />
                <h3>Choice of Size</h3>
                <select id='pizza size' name='size'>
                    <option value='Extra Large'>Extra Large</option>
                    <option value='Large'>Large</option>
                    <option value='Medium'>Medium</option>
                    <option value='Small'>Small</option>
                    <option value='Personal'>Tiny</option>
                </select>


            <h3>Add Topings</h3>
            <label htmlFor='Pepperoni' />
            Pepperoni
                <input
                    type='checkbox'
                    name='pepperoni'
                />
            <label htmlFor='Sausage' />
            Sausage
                <input
                    type='checkbox'
                    name='sausage'
                />
            <label htmlFor='Onion' />
            Onion
                <input
                    type='checkbox'
                    name='onion'
                />
            <label htmlFor='Green Pepper' />
            Green Pepper
                <input
                    type='checkbox'
                    name='green pepper'
                />
            <label htmlFor='Extra Cheese' />
            Extra Cheese
                <input
                    type='checkbox'
                    name='extra cheese'
                />

            

            <h3>Special Instructions</h3>
            <label htmlFor="Special Instructions" />
            Special Instructions
                <input 
                    type='textarea'
                    name='special instructions'
                />

        </div>
    )
}

export default Pizza;