import React from "react";
import styled from "styled-components";
import Backdrop from './Backdrop';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  color: black;
  text-align: center;
  font-size: 5vw;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
`;
const Main = styled.p`
  color: #e6ffff;
  text-align: center;
  font-size: 12px;
  font-size: 3.5vw;
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding-top: 20%;
`;

const exampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

function Slide() {
  return (
    <Wrapper>
      <Backdrop backgroundColor={"#1f331f"} >
        <Title>What is Lorem Ipsum?</Title>

        <Main>{exampleText}</Main>
      </Backdrop>
    </Wrapper>
  );
}

export default Slide;
