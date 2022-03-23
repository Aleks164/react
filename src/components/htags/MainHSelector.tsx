import React, { useState } from 'react';
import { HRenderer } from "./HRenderer";
import { HSelect } from './HSelect';


export const HSelector = (prop) => {
    const [hSelect, setHSelect] = useState(prop.value);
    const handleChange = (event) => {
        setHSelect(event.target.value)
    };
    return (
        <>
            <HRenderer hNumber={hSelect} text={`Some text in ${hSelect} element`} />
            <HSelect handleChange={handleChange} />
        </>

    )
}


