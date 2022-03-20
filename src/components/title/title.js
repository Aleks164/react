import React, { useState } from 'react';

export const Title = ({ textP }) => {
    const [value, setValue] = useState(true);
    const handleChange = () => { setValue(!value) };
    return (

        <div className='wrap'>
            <h1 onClick={handleChange}>Click on me</h1>
            {value && <p >{textP}</p>}
        </div>

    );
}