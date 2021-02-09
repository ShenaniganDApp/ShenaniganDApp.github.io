import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';

const isPhone = window.innerWidth <= 768;

const Wrapper = styled.div`
	background-color: black;
	overflow: hidden;
`;

const MainTextSection = styled(Section)`
	flex-direction: column;
	justify-content: center;
	background-color: transparent;
	z-index: 1;
`;

const Button = styled.div`
	transition: 0.3s;
	padding: 1rem;
	backdrop-filter: blur(2px);
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
	margin: 2vh 0;
	z-index: 1;
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

const BackgroundImageFull = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	min-width: 50%;
	min-height: 50%;
	@media (max-width: 728px) {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

const BackgroundWrapper = styled.div`
	position: fixed;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;
	@media (max-width: 728px) {
		display: hidden;
	}
`;
const BackgroundImageThumb = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	height: 100%;
	width: 100%;
	transform: translate(-50%, -50%);
	z-index: 0;
	filter: blur(20px);
	transition: visibility 0ms ease 400ms; ;
`;

const ButtonsSection = styled(Section)`
	position: absolute;
	justify-content: space-around;
	bottom: 0;
`;
function EntrySection(props, ref) {
	const [text, setText] = useState(0);
	const [toggleButtons, setToggleButtons] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	function showButtons() {
		setToggleButtons(true);
	}
	return (
		<Wrapper>
			<BackgroundImageThumb
				src={require('../images/she_80s_BackgroundMobileBlurry.png')}
				style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
			/>
			<BackgroundWrapper>
				<BackgroundImageFull
					onLoad={() => {
						setIsLoaded(true);
					}}
					style={{ opacity: isLoaded ? 1 : 0 }}
					src={require(isPhone
						? '../images/she_80s_BackgroundMobile.png'
						: '../images/she_80s_Background.png')}
				/>
			</BackgroundWrapper>
			<Section width={'100%'} centered>
				<StyledImg></StyledImg>
			</Section>
			<MainTextSection>
				{text == 0 && (
					<EntryText shadowed={'black'} length={19 * 0.1} main onAnimationEnd={showButtons}>
						> Establishing Connection. . .
					</EntryText>
				)}
				{text > 0 && (
					<EntryText shadowed={'black'} main length={29 * 0.1} onAnimationEnd={() => setText(2)}>
						> Nice to see you made it here.
					</EntryText>
				)}
				{text > 1 && (
					<EntryText shadowed={'black'} main length={17 * 0.1} onAnimationEnd={() => setText(3)}>
						> Who am I?
					</EntryText>
				)}
				{text > 2 && (
					<EntryText shadowed={'black'} main length={29 * 0.1} onAnimationEnd={() => setText(4)}>
						> I am SHE, goddess and game master for Shenanigan.
					</EntryText>
				)}
				{text > 3 && (
					<EntryText shadowed={'black'} length={17 * 0.1} main onAnimationEnd={() => setText(5)}>
						> Where are you, you ask?
					</EntryText>
				)}
				{text > 4 && (
					<EntryText shadowed={'black'} length={20 * 0.1} main onAnimationEnd={() => setText(6)}>
						> This is my world, and you have found its beginning.
					</EntryText>
				)}
				{text > 5 && (
					<EntryText shadowed={'black'} length={20 * 0.1} main>
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
									<Text shadowed={colors.lightcyan} largeMain>
										Enter
									</Text>
								</Button>
							</Link>
						</Section>

						<a href="http://she.energy/docs">
							<Button>
								<Text shadowed={colors.lightcyan} largeMain>
									Learn
								</Text>
							</Button>
						</a>
						<Link to="/join">
							<Button>
								<Text shadowed={colors.lightcyan} largeMain>
									Join
								</Text>
							</Button>
						</Link>
					</ButtonsSection>
				</>
			)}
		</Wrapper>
	);
}

export default EntrySection;
