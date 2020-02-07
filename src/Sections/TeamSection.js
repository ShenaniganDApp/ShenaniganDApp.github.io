import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop } from '../styles';

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

const exampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

function TeamSection(props, ref) {
  const teamRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return teamRef.current.getBoundingClientRect().top;
    }
  }));

  return (
    <Wrapper ref={teamRef} img={'./images/scoreboard.jpg'} id="team">
      <Divider />
      <StyledBackdrop
        background={
          'radial-gradient(circle at 65% -7%, rgba(255,255,68,0.5) 0%, rgba(208,0,108,0.5) 55%, black 70%)'
        }
      >
        <TextSection>
          <Text color={'#e6ffff'}>Team</Text>
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

export default forwardRef(TeamSection);
