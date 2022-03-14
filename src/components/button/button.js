import React from 'react';

export const Button = ({ onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} style={{ backgroundColor: 'red' }}>submit</button>
    )
}