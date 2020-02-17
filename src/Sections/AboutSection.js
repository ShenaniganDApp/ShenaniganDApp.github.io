import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: black;
  flex-wrap: wrap;
`;

const Button = styled.div`
  transition: 0.3s;
  margin: 2rem;
  padding: 2rem 5rem;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
  border-radius: 15px;
  border: 2px solid ${colors.deeppink};
  color: ${colors.lightcyan};
  text-align: center;
  display: inline-block;
  &:hover {
    transform: scale(0.9);
    background-color: ${colors.lightcyan};
    color: ${colors.deeppink};
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

function AboutSection(props, ref) {
  return (
    <Wrapper>
      <Section>
        <Text title color={colors.lightcyan}>
          {' '}
          Content not yet available
        </Text>
      </Section>
      <Section>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </Section>
      >
    </Wrapper>
  );
}

export default AboutSection;
