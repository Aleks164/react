import React from 'react';
import { Button } from './components/button/button';
import { Image } from './components/image/image';
import { Paragraph } from './components/paragraph/paragraph';
import { Title } from './components/title/title';

const textP = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempora repellendus ea commodi repellat accusamus nostrum ipsam repudiandae odio? Dolore libero quisquam blanditiis officiis ipsa nobis ullam quod, accusamus quia."

export const App = ({ click, disabled }) => {
  return (
    <>
      <Button onClick={click} />
      <Title />
      <Paragraph textP={textP} />
      <Image />
    </>
  )
}