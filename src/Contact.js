import React from "react";
import styled from "styled-components";
import Slide from './Slide';


const Wrapper = styled.div`
  width: 80vw;
  display: flex;
`;

function Contact() {
  return (
    <Wrapper  id="contact">
      <Slide/>
    </Wrapper>
  );
}

export default Contact;
