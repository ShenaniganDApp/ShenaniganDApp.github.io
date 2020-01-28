import React from 'react';
import styled from 'styled-components';
import { Section, Text } from '../styles';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom:8rem;
`;
const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  background: linear-gradient(black, transparent);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`;
const Title = styled.h1`
  color: #e6ffff;
  text-align: center;
  -webkit-text-stroke: 3px #ff006c;
  font-size: calc(3rem + 20vw);
  font-family: 'Electro-Shackle', sans-serif;
  font-weight: 900;
  width:100%;
`;
const Slogan = styled.p`
  color: #e6ffff;
  text-align: center;
  margin: 15% 10% 0% 10%;
  font-size: 6vw;
  font-family: 'Roboto', sans-serif;
  text-shadow: black 0px 0px 10px;
`;
const ContentSection = styled(Section)`
  margin: 1rem 2rem;
  padding: 4rem;
`;

function HomeSection() {
  return (
    <Wrapper>
      <Backdrop />
      <Slogan>
        Powering Athletes to Jump Higher, Run Faster, and Throw Farther.
      </Slogan>
      <Title>She</Title>
      <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
        <Text title color={'black'}>
          Give
        </Text>
      </ContentSection>
      <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
        <Text title color={'black'}>
          Athletes
        </Text>
      </ContentSection>
      <ContentSection
        backgroundColor={'rgba(255,255,68,0.7)'}
      >
        <Text title color={'black'}>
          Your
        </Text>
      </ContentSection>
      <ContentSection
        backgroundColor={'rgba(255,255,68,0.7)'}
      >
        <Text title color={'black'}>
          Energy
        </Text>
      </ContentSection>
    </Wrapper>
  );
}

export default HomeSection;
