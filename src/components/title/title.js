import React, { useState } from 'react';

export const Title = () => {
    const [value, setValue] = useState(true);
    const handleChange = () => { setValue(!value) };
    return (
        <>
            <h1 onClick={handleChange}>Click on me</h1>
            {value && <h1 >content</h1>}
        </>
    );
}