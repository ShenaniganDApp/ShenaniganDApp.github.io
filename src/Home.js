import React from "react";
import styled from "styled-components";


const Wrapper = styled.div``;
const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  background: linear-gradient(black, transparent);
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
    
    
`;
const Slogan = styled.p`
    color:#e6ffff;
    text-align: center;
    margin:15% 10% 0% 10%
    font-size: 6vw
    font-family: 'Roboto', sans-serif;

`;

function Home() {
  return (
    <Wrapper>
      <Backdrop />
      <Slogan>a community driven, talent support service</Slogan>
      <Title>SHE</Title>
    </Wrapper>
  );
}

export default Home;
