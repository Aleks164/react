import React, { useState } from 'react';
import { HRenderer } from "./HRenderer";
import { HSelect } from './HSelect';


export const HSelector = () => {
    const [hSelect, setHSelect] = useState("h1");
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


