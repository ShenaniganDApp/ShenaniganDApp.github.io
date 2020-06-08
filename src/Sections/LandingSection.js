import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  HomeSection,
  EnergySection,
  MilestoneSection,
  TeamSection,
  ContactSection,
  QuestionSection,
} from './';
import Header from '../Header';
import { DiscordButton } from '../components';

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

function LandingSection() {
  const [heights, setHeights] = useState({});
  const energyRef = useRef();
  const questionRef = useRef();
  const milestoneRef = useRef();
  const teamRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const handleContentHeights = () => {
      const energyHeight =
        -energyRef.current.boundingTop() - window.pageYOffset;
      const questionHeight =
        -questionRef.current.boundingTop() - window.pageYOffset;
      const milestoneHeight =
        -milestoneRef.current.boundingTop() - window.pageYOffset;
      const teamHeight = -teamRef.current.boundingTop() - window.pageYOffset;
      const contactHeight =
        -contactRef.current.boundingTop() - window.pageYOffset;
      setHeights({
        energy: energyHeight,
        question: questionHeight,
        milestone: milestoneHeight,
        team: teamHeight,
        contact: contactHeight,
      });
    };
    handleContentHeights();
    window.addEventListener('resize', handleContentHeights);
    return (_) => {
      window.removeEventListener('resize', handleContentHeights);
    };
  }, [energyRef, milestoneRef, teamRef, contactRef]);
  return (
    <React.Fragment>
      <DiscordButton />
      <Header heights={heights} />
      <HomeSection />
      <HomeWrapper>
        <EnergySection ref={energyRef} />
        <QuestionSection ref={questionRef} />
      </HomeWrapper>
      <Spacer src={require('../svg/spacer.svg')}></Spacer>
      <MainWrapper>
        <MilestoneSection ref={milestoneRef} height={heights.milestone} />
        <TeamSection ref={teamRef} />
        <ContactSection ref={contactRef} />
      </MainWrapper>
    </React.Fragment>
  );
}

export default LandingSection;
