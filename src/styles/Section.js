import React from "react";
import styled, { css } from "styled-components";

const Section = styled.div`
  width: 35%;
  height: auto;
  max-width: 450px;
  background-color: ${props => props.backgroundColor};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  z-index: 1;
  ${props =>
    (props.xLarge &&
      css`
        width: 75%;
        height: auto;
      `) ||
    (props.large &&
      css`
        width: 50%;
        height: auto;
        max-width: 500px;
        min-width: 150px;
      `) ||
    (props.small &&
      css`
        width: 30%;
        height: auto;
        max-width: 500px;
        min-width: 75px;
      `)};
`;

const exampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

export default Section;
