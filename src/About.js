import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import styled from 'styled-components';
import Backdrop from './styles/Backdrop';
import Section from './styles/Section';
import Text from './styles/Text';

const Wrapper = styled.div`
  height: 100vh;
  width: 80%;
  background-image: url(${require('./images/scoreboard.jpg')});
`;
const TextSection = styled(Section)`
  background-color: #e6ffff;
`;

const exampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

function About(props, ref) {
  const aboutRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return aboutRef.current.getBoundingClientRect().top
    }
  }));

  return (
    <Wrapper ref={aboutRef} id="about">
      <Backdrop linearGradient={'#ff006c,#ff4'}>
        <TextSection large>
          <Text title>What is Lorem Ipsum?</Text>

          <Text main>{exampleText}</Text>
        </TextSection>
        <Section small backgroundColor={'#ff4'}></Section>
      </Backdrop>
    </Wrapper>
  );
}

export default forwardRef(About);
