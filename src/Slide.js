import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;
const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  background: linear-gradient(black 65%, #ff006c);
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  color: #e6ffff;
  text-align: center;
  -webkit-text-stroke: 3px #ff006c;
  font-size: 10rem;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
`;
const Main = styled.p`
    color:#e6ffff;
    text-align: center;
    margin:15% 10% 0% 10%
    font-size: 6vw
    font-family: 'Roboto', sans-serif;

`;

function Slide() {
  return (
    <Wrapper>
      <Backdrop>
        <Main>a community driven, talent support service</Main>
        <Title>SHE</Title>
      </Backdrop>
    </Wrapper>
  );
}

export default Slide;
