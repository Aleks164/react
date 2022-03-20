import React from 'react';
import { Image } from './components/image/';
import { Paragraph } from './components/paragraph/';
import { Title } from './components/title/';
import { Hr } from './components/hr/';
import { HSelector } from './components/htags/';

export const textP = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempora repellendus ea commodi repellat accusamus nostrum ipsam repudiandae odio? Dolore libero quisquam blanditiis officiis ipsa nobis ullam quod, accusamus quia."

export const App = () => {
  return (
    <>
      <Title />
      <Hr />
      <HSelector />
      <Hr />
      <Paragraph textP={textP} />
      <Hr />
      <Image />
    </>
  )
}