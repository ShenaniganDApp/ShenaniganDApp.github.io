import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Title = styled.h1`
    color:#e6ffff; 
    text-align:center; 
    -webkit-text-stroke: 3px #ff006c; 
    font-size: 10rem; 
    font-family: 'Roboto', sans-serif; 
    font-weight: 900;
    margin:0;"
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
      <Title>SHE</Title>
      <Slogan>a community-driven, talent support service</Slogan>
    </Wrapper>
  );
}

export default Home;
