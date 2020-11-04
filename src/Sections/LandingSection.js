import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { HomeSection, EnergySection, MilestoneSection, TeamSection, ContactSection, QuestionSection } from './';
import Header from '../Header';
import { Section } from '../styles';
import { DiscordButton, StakeButton } from '../components';

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

const FooterSection = styled(Section)`
	justify-content: center;
	align-items: space-between;
	width: 20%;
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	z-index: 100;
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
			const energyHeight = -energyRef.current.boundingTop() - window.pageYOffset;
			const questionHeight = -questionRef.current.boundingTop() - window.pageYOffset;
			const milestoneHeight = -milestoneRef.current.boundingTop() - window.pageYOffset;
			const teamHeight = -teamRef.current.boundingTop() - window.pageYOffset;
			const contactHeight = -contactRef.current.boundingTop() - window.pageYOffset;
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
			<FooterSection>
				{/* <StakeButton /> */}
				<DiscordButton />
			</FooterSection>

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
