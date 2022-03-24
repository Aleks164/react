import React, { useState, useEffect } from 'react';
import { ConditionRender } from "./components/ConditionRender"

export type SetValue = [componentNamePrompt: string,
    propsCompPrompt: string | null | undefined];


export const App = () => {    
    const [value, setValue] = useState(["default", ""] as SetValue);
   
    useEffect(() => {
        let propsCompPrompt;
    
        let componentNamePrompt = window.prompt("Type Title, Hr, HSelector, Paragraph or Image");
        if (componentNamePrompt === "HSelector") {
            propsCompPrompt = window.prompt("Type h1, h2, h3, h4, h5 or h6");
        }
        if (componentNamePrompt === "Image") {
            propsCompPrompt = window.prompt("Type left or right");
        }
        if (componentNamePrompt !== "" && componentNamePrompt !== null) {
            setValue([componentNamePrompt, propsCompPrompt]);
        }        
    })
    return (
        <>
            {ConditionRender(value)}
        </>
    )
}


