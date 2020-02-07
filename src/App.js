import React, { useRef, useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  HomeSection,
  EnergySection,
  MilestoneSection,
  TeamSection
} from './Sections';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

const AppWrapper = styled.div``;

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spacer = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
  display: block;
`;

function App() {
  const [heights, setHeights] = useState({});
  const energyRef = useRef();
  const milestoneRef = useRef();
  const teamRef = useRef();

  useEffect(() => {
    const energyHeight = -energyRef.current.boundingTop() - window.pageYOffset;
    const milestoneHeight =
      -milestoneRef.current.boundingTop() - window.pageYOffset;

    const teamHeight = -teamRef.current.boundingTop() - window.pageYOffset;
    setHeights({
      energy: energyHeight,
      milestone: milestoneHeight,
      team: teamHeight
    });
  }, [energyRef, milestoneRef, teamRef]);

  return (
    <Router>
      <AppWrapper id="top">
        <Header heights={heights} />
        <HomeSection />
        <HomeWrapper>
          <EnergySection ref={energyRef} />
        </HomeWrapper>
        <Spacer src={require('./svg/spacer.svg')}></Spacer>
        <MainWrapper>
          <MilestoneSection ref={milestoneRef} />
          <TeamSection ref={teamRef} />
        </MainWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
