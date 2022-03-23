import React, { useState, useEffect } from 'react';
import { Image } from './components/image';
import { Paragraph } from './components/paragraph';
import { Title } from './components/title';
import { Hr } from './components/hr';
import { HSelector } from './components/htags';

type SetValue = [componentNamePrompt: string,
    propsCompPrompt: string | null | undefined];


export const App = () => {
    let compArr = [Image, Paragraph, Title, Hr, HSelector]
    const [value, setValue] = useState(["h1", ""] as SetValue);
    // const handleChange = (event) => {
    //     setValue(event.target.value)
    // };
    function elFilter(value) {
        let result = compArr.reduce((el) => {

        })
    }
    useEffect(() => {
        let propsCompPrompt;

        const componentNamePrompt = window.prompt("Type Title, Hr, HSelector, Paragraph or Image");
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
            { }
        </>
    )
}


