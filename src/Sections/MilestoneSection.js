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
const MilestoneMainSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
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

const Divider = styled.div`
  height: 0.2rem;

  flex-grow: 1;
  background: rgb(230, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(230, 255, 255, 0) 0%,
    rgba(230, 255, 255, 1) 6%,
    rgba(230, 255, 255, 1) 94%,
    rgba(230, 255, 255, 0) 100%
  );
`;

const TextSection = styled(Section)`
  justify-content: space-between;
  width: 100%;
  margin: 2rem 1rem;
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
        <MilestoneMainSection width={'100%'}>
          <Text color={colors.gold}>2020&nbsp;</Text>
          <Text color={colors.deeppink}> Road Map</Text>
          <TextSection centered>
            <Section centered textCentered width={'40%'}>
              <Text shadowed margin={'0 0rem 1rem 0'} title color={colors.gold}>
                Q1 2020
              </Text>
              <Text shadowed main color={colors.lightcyan}>
                DELIVER OUR MESSAGE TO THE WORLD
              </Text>
            </Section>
            <Divider />
          </TextSection>
          <TextSection centered>
            <Divider />
            <Section centered textCentered width={'40%'}>
              <Text shadowed margin={'0 0rem 1rem 0'} title color={colors.gold}>
                Q2 2020
              </Text>
              <Text shadowed main color={colors.lightcyan}>
                BUILD, BUILD, BUILD
              </Text>
            </Section>
          </TextSection>
          <TextSection centered>
            <Section centered textCentered width={'40%'}>
              <Text shadowed margin={'0 0rem 1rem 0'} title color={colors.gold}>
                Q3 2020
              </Text>
              <Text shadowed main color={colors.lightcyan}>
                OPEN SOURCE OUR CODE FOR REVIEW
              </Text>
            </Section>
            <Divider />
          </TextSection>
          <TextSection centered>
            <Divider />
            <Section centered textCentered width={'40%'}>
              <Text shadowed margin={'0 0rem 1rem 0'} title color={colors.gold}>
                Q4 2020
              </Text>
              <Text shadowed main color={colors.lightcyan}>
                GO LIVE WITH BETA
              </Text>
            </Section>
          </TextSection>
          <Section centered textCentered>
            <Section centered width={'80%'}>
              <Text shadowed margin={'5rem 0 1rem 0'} title color={colors.lightcyan}>
                2021
              </Text>
            </Section>
            <Text shadowed main color={colors.lightcyan}>
              SHENANIGAN RELEASES ON GOOGLE PLAY AND APPLE APP STORES.
            </Text>
          </Section>
        </MilestoneMainSection>
      </StyledBackdrop>
    </Wrapper>
  );
}

export default forwardRef(MilestoneSection);
