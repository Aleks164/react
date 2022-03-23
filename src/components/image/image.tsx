import React, { useState, useEffect } from 'react';

type FloatingType = "left" | "right";

interface MyEventTarget extends EventTarget {
    style: { float: FloatingType }
}

export const Image = () => {
    const [floating, setFloating] = useState<FloatingType>("left");

    const clickChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (floating === "right") {
            setFloating("left")
        }
        else {
            setFloating("right")
        }
        (event.target as MyEventTarget).style.float = floating;
    };

    return (
        <div onClick={clickChange} style={{ float: floating }} className='image'></div>
    )
}