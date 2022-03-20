import React from 'react';

export function HSelect({ handleChange }) {

    return (
        <>
            <label htmlFor="h-select">Выберите тег "h" </label>
            <select onChange={handleChange} name="h-source" data-testid="h-select">
                <option defaultValue value="h1">h1</option>
                <option value="h2">h2</option>
                <option value="h5">h5</option>
                <option value="h4">h4</option>
                <option value="h3">h3</option>
                <option value="h6">h6</option>
            </select>
        </>
    )


}