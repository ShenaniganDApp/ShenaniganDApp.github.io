import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  background: black;
  flex-wrap: wrap;
`;

const ContentSection = styled(Section)`
  margin: 1rem 2rem;
  padding: 4rem;
  min-width: 10vw;
  min-height: 10vw;
`;

const StyledBackdrop = styled(Backdrop)`
  width: 100%;
  padding-top: 15rem;
  padding-bottom: 15rem;
  display: flex;
  flex-wrap: wrap;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5em;
  background-color: black;
`;
const TextSection = styled(Section)`
  margin-bottom: 10rem;
  width: 80%;
  font-size: 9vw;
  font-weight: 900;
  font-family: 'Electro-Shackle', sans-serif;
  justify-content: center;
`;


function ContactSection(props, ref) {
  const contactRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return contactRef.current.getBoundingClientRect().top;
    }
  }));

  return (
    <Wrapper ref={contactRef} img={'./images/scoreboard.jpg'} id="contact">
      <Divider />
      <StyledBackdrop background={'black'}>
        <TextSection margin={'0 100%'}>
          <Text color={colors.lightcyan}>Contact</Text>
        </TextSection>
        <ContentSection
          backgroundColor={'rgba(255,255,68,0.7)'}
        ></ContentSection>
        <ContentSection
          backgroundColor={'rgba(255,255,68,0.7)'}
        ></ContentSection>
        <ContentSection
          backgroundColor={'rgba(255,255,68,0.7)'}
        ></ContentSection>
        <ContentSection
          backgroundColor={'rgba(255,255,68,0.7)'}
        ></ContentSection>
        <ContentSection
          backgroundColor={'rgba(255,255,68,0.7)'}
        ></ContentSection>
      </StyledBackdrop>
    </Wrapper>
  );
}

export default forwardRef(ContactSection);
