import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import styled from 'styled-components';
import Backdrop from '../styles/Backdrop';
import Section from '../styles/Section';
import Text from '../styles/Text';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-top: 20rem;

  display: flex;
  justify-content: center;
  background: black url(${require('../images/scoreboard.jpg')});
  background-size: cover;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-position: 26% 25%;
  }
`;
const TextSection = styled(Section)`
  margin-bottom: 10rem;
  width: 100%;
  font-size: 9vw;
  font-weight: 900;
  font-family: 'Electro-Shackle', sans-serif;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  width: 100%;
  padding-top: 20rem;
  padding-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
`;

const ContentSection = styled(Section)`
  margin: 1rem 2rem;
  padding: 4rem;
`;

const exampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

function MilestoneSection(props, ref) {
  const aboutRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return aboutRef.current.getBoundingClientRect().top;
    }
  }));

  return (
    <Wrapper ref={aboutRef} id="roadmap">
      <StyledBackdrop
        background={`radial-gradient(circle at 65% 107%, rgba(255,255,68,0.5) 0%, rgba(208,0,108,0.5) 55%, black 70%), 
          linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 70.71%)`}
      >
        <TextSection width={'100%'}>
          <Text color={'#e6ffff'}>2020 Road Map</Text>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={'#e6ffff'}>
              Q1 2020:
            </Text>
            <Text title color={'#e6ffff'}>
              Deliver our message to the world
            </Text>
          </ContentSection>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={'#e6ffff'}>
              Q2 2020:
            </Text>
            <Text title color={'#e6ffff'}>
              Build, Build, Build
            </Text>
          </ContentSection>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={'#e6ffff'}>
              Q3 2020:
            </Text>
            <Text title color={'#e6ffff'}>
              Open Source our code for review
            </Text>
          </ContentSection>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={'#e6ffff'}>
              Q4 2020:
            </Text>
            <Text title color={'#e6ffff'}>
              Go live with beta
            </Text>
          </ContentSection>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={'#e6ffff'}>
              2021:
            </Text>
            <Text title color={'#e6ffff'}>
              Shenanigan releases on google play and apple app store.
            </Text>
          </ContentSection>
        </TextSection>
      </StyledBackdrop>
    </Wrapper>
  );
}

export default forwardRef(MilestoneSection);
