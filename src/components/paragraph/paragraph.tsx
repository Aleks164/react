import React from "react";

type TextType = {
  textP: string;
};

export const Paragraph = ({ textP }: TextType) => {
  return <p>{textP}</p>;
};
