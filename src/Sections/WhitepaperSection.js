import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: black;
  flex-wrap: wrap;
`;

const Button = styled.div`
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4vw;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
  border-radius: 15px;
  border: 2px solid ${colors.deeppink};
  color: ${colors.lightcyan};
  min-height: 2.5rem;
  margin: 1rem auto 0rem;
  backdrop-filter: blur(5px);
  &:hover {
    transform: scale(0.9);
    background-color: ${colors.lightcyan};
    color: ${colors.deeppink};
  }
`;
const SideBar = styled(Section)`
  width: 25vw;
  background-color: grey;
  align-content: flex-start;
`;

const Category = styled(Section)`
  width: 100%;
  height: 5%;
  border: 1px solid black;
`;

function WhitepaperSection(props, ref) {
  return (
    <Wrapper>
      <SideBar>
        <Category>
          <Text>A</Text>
        </Category>
        <Category>
          <Text>B</Text>
        </Category>
        <Category>
          <Text>C</Text>
        </Category>
        <Category>
          <Text>D</Text>
        </Category>
        <Category>
          <Text>E</Text>
        </Category>
        <Category>
          <Text>F</Text>
        </Category>
        <Category>
          <Text>G</Text>
        </Category>
      </SideBar>
      <Section width={'75vw'}>
        <Section textCentered width={'100vw'}>
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
      </Section>
    </Wrapper>
  );
}

export default WhitepaperSection;
