import React from "react";
import styled from "styled-components";
import Slide from './Slide';


const Wrapper = styled.div`
    height:100vh
`;

function About() {
  return (
    <Wrapper  id="about">
      <Slide/>
      </Wrapper>
  );
}

export default About;
