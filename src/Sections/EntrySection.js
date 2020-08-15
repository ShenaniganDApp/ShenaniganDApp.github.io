import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	display: relative;
	background-color: black;
	overflow: hidden;
`;

const BackgroundImage = styled.img`
	pointer-events: none;
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	height: auto;
	width:100%;
	opacity: 0.1;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const MainTextSection = styled(Section)`
	flex-direction: column;
`;

const Button = styled.div`
	transition: 0.3s;
	margin: auto;
	box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
	border-radius: 10px;
	border-bottom: 2px solid ${colors.deeppink};
	color: ${colors.lightcyan};
	display: inline-block;
	animation: show 3.5s;
	&:hover {
		transform: scale(1.1);
		color: ${colors.deeppink};
	}
	@media (max-width: 768px) {
		margin-bottom: 2rem;
	}
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
`;

const EntryText = styled(Text)`
	color: ${colors.lightcyan};
	overflow: hidden; /* Ensures the content is not revealed until the animation */
	white-space: nowrap; /* Keeps the content on a single line */
	letter-spacing: 0.05em; /* Adjust as needed */
	animation: typing ${(props) => props.length}s steps(40, end);
	margin: 2vw 0;
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
`;
const StyledImg = styled.img`
	margin: 5vh 0;
	height: 25vh;
	animation: show 3.5s;
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const ButtonsSection = styled(Section)`
	position: absolute;
	justify-content: space-around;
	bottom: 0;
`;
function EntrySection(props, ref) {
	const [text, setText] = useState(0);
	const [toggleButtons, setToggleButtons] = useState(false);

	function showButtons() {
		setToggleButtons(true);
	}
	return (
		<Wrapper>
			<BackgroundImage src={require('../images/She_Logo.png')} />
			<Section width={'100%'} centered>
				<StyledImg src={require('../images/She_Logo.png')}></StyledImg>
			</Section>
			<MainTextSection>
				{text == 0 && (
					<EntryText length={19 * 0.1} smallMain onAnimationEnd={showButtons}>
						> Establishing Connection. . .
					</EntryText>
				)}
				{text > 0 && (
					<EntryText smallMain length={29 * 0.1} onAnimationEnd={() => setText(2)}>
						> Nice to see you made it here.
					</EntryText>
				)}
				{text > 1 && (
					<EntryText smallMain length={17 * 0.1} onAnimationEnd={() => setText(3)}>
						> Who am I?
					</EntryText>
				)}
				{text > 2 && (
					<EntryText smallMain length={29 * 0.1} onAnimationEnd={() => setText(4)}>
						> I am SHE, goddess and game master for Shenanigan.
					</EntryText>
				)}
				{text > 3 && (
					<EntryText length={17 * 0.1} smallMain onAnimationEnd={() => setText(5)}>
						> Where are you, you ask?
					</EntryText>
				)}
				{text > 4 && (
					<EntryText wrap length={20 * 0.1} smallMain onAnimationEnd={() => setText(6)}>
						> This is my world, and you have found its beginning.
					</EntryText>
				)}
				{text > 5 && (
					<EntryText wrap length={20 * 0.1} smallMain>
						> You can click an option below to start your journey.
					</EntryText>
				)}
			</MainTextSection>
			{toggleButtons && (
				<>
					<ButtonsSection width={'100%'} centered textCentered margin="0 0 1rem 0">
						<Section width="100%" centered margin="10vh 0 0 0">
							<Link to="/home">
								<Button onAnimationEnd={() => setText(1)}>
									<Text main>Enter</Text>
								</Button>
							</Link>
						</Section>

						<a href="http://she.energy/wiki">
							<Button>
								<Text main>Learn</Text>
							</Button>
						</a>
						<Link to="/join">
							<Button>
								<Text main>Join</Text>
							</Button>
						</Link>
					</ButtonsSection>
				</>
			)}
		</Wrapper>
	);
}

export default EntrySection;
