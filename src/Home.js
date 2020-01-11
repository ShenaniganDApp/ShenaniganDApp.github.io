import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index:-1;
`;
const Title = styled.h1`
    color:#e6ffff; 
    text-align:center; 
    -webkit-text-stroke: 3px #ff006c; 
    font-size: 10rem; 
    font-family: 'Roboto', sans-serif; 
    font-weight: 900;
    margin:0;
    
`;
const Slogan = styled.p`
    color:#e6ffff;
    text-align: center;
    font-size: 1rem
    font-family: 'Roboto', sans-serif;

`;

function Home() {
  return (
    <Wrapper>
      <Backdrop />
      <Title>SHE</Title>
      <Slogan>a community-driven, talent support service</Slogan>
    </Wrapper>
  );
}

export default Home;
