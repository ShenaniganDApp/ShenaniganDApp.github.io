import React from 'react';
import styled from 'styled-components';
import { Section, Text, colors } from '../styles';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 8rem;
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
  color: ${colors.lightcyan};
  text-align: center;
  -webkit-text-stroke: 3px #ff006c;
  font-size: calc(1rem + 10vw);
  font-family: 'Electro-Shackle', sans-serif;
  font-weight: 900;
  padding: 0;
`;
const Slogan = styled.p`
  color: ${colors.lightcyan};
  width:100%;
  font-size: 4vw;
  font-family: 'Roboto', sans-serif;
  text-shadow: black 0px 0px 10px;
  padding:0; 
  margin:0;
`;
const ContentSection = styled(Section)`
  margin: 2rem 100%;
  padding: 4rem;
`;
const StyledImg = styled.img`
  margin: 1rem 0;
  height: 100%;
  width: auto;
`;

const TitleSection = styled(Section)`
  margin: 2rem 1vw 0rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 10vw;
`;

const SloganSection = styled(Section)`
  width: 100%;
  height: 10%;

`;

function HomeSection() {
  return (
    <Wrapper>
      <Backdrop />
      <TitleSection width={'100%'}>
        <Title>Sh</Title> <StyledImg src={require('../images/logo.png')} />
        <Title>nanIgan</Title>
      </TitleSection>
      <SloganSection margin={"1rem 0 0 15%"}>
        <Slogan>Powering Athletes to</Slogan>
      </SloganSection>
      <SloganSection margin={"0 0 0 25%"}>
        <Slogan> &nbsp; Jump Higher</Slogan>
      </SloganSection>
      <SloganSection margin={"0 0 0 25%"}>
        <Slogan> &nbsp; &nbsp; &nbsp;Throw Farther</Slogan>
      </SloganSection>
      <SloganSection margin={"0 0 0 25%"}>
        <Slogan> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Run Faster</Slogan>
      </SloganSection>
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
      <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
        <Text title color={'black'}>
          Your
        </Text>
      </ContentSection>
      <ContentSection backgroundColor={'rgba(255,255,68,0.7)'}>
        <Text title color={'black'}>
          Energy
        </Text>
      </ContentSection>
    </Wrapper>
  );
}

export default HomeSection;
