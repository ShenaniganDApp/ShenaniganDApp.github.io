import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import styled from 'styled-components';
import { Backdrop, Section, Text, colors } from '../styles';

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
          <Text color={colors.lightcyan}>2020 Road Map</Text>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={colors.lightcyan}>
              Q1 2020:
            </Text>
            <Text title color={colors.lightcyan}>
              Deliver our message to the world
            </Text>
          </ContentSection>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={colors.lightcyan}>
              Q2 2020:
            </Text>
            <Text title color={colors.lightcyan}>
              Build, Build, Build
            </Text>
          </ContentSection>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={colors.lightcyan}>
              Q3 2020:
            </Text>
            <Text title color={colors.lightcyan}>
              Open Source our code for review
            </Text>
          </ContentSection>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={colors.lightcyan}>
              Q4 2020:
            </Text>
            <Text title color={colors.lightcyan}>
              Go live with beta
            </Text>
          </ContentSection>
          <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
            <Text title color={colors.lightcyan}>
              2021:
            </Text>
            <Text title color={colors.lightcyan}>
              Shenanigan releases on google play and apple app store.
            </Text>
          </ContentSection>
        </TextSection>
      </StyledBackdrop>
    </Wrapper>
  );
}

export default forwardRef(MilestoneSection);
