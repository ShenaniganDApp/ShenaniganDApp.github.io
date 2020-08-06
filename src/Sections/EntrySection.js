import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	background-color: black;
`;

const MainTextSection = styled(Section)`
	flex-direction: column;
	justify-content: space-around;
	margin: 25% auto;
	width: 100%;
	height: 50%;
`;

const Button = styled.div`
	transition: 0.3s;
	margin: auto;
	padding: 2rem 5rem;
	box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
	border-radius: 15px;
	border: 2px solid ${colors.deeppink};
	color: ${colors.lightcyan};
	display: inline-block;
	animation: show 3.5s;
	&:hover {
		transform: scale(0.9);
		background-color: ${colors.lightcyan};
		color: ${colors.deeppink};
	}
	@media (max-width: 768px) {
		margin-bottom: 2rem;
	}
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const EntryText = styled(Text)`
	color: ${colors.lightcyan};
	overflow: hidden; /* Ensures the content is not revealed until the animation */
	white-space: nowrap; /* Keeps the content on a single line */
	letter-spacing: 0.15em; /* Adjust as needed */
	animation: typing ${(props) => props.length}s steps(40, end);

	margin: 1rem 0;
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
`;

const ButtonsSection = styled(Section)`
	justify-content: space-around;
`;
function EntrySection(props, ref) {
	const [text, setText] = useState(0);
	const [toggleButtons, setToggleButtons] = useState(false);

	function showButtons() {
		setToggleButtons(true);
	}
	return (
		<Wrapper>
			<MainTextSection>
				<EntryText length={19 * 0.1} main onAnimationEnd={showButtons}>
					> Hello. . .
				</EntryText>
				{text > 0 && (
					<EntryText main length={29 * 0.1} onAnimationEnd={() => setText(2)}>
						> Nice to see you made it here.
					</EntryText>
				)}
				{text > 1 && (
					<EntryText main length={12 * 0.1} onAnimationEnd={() => setText(3)}>
						> Who am I?
					</EntryText>
				)}
				{text > 2 && (
					<EntryText main length={29 * 0.1} onAnimationEnd={() => setText(4)}>
						> I am SHE, game master and goddess of Shenanigan
					</EntryText>
				)}
				{text > 3 && (
					<EntryText length={17 * 0.1} main onAnimationEnd={() => setText(5)}>
						> Where are you, you ask?
					</EntryText>
				)}
				{text > 4 && (
					<EntryText length={29 * 0.1} main>
						> This is my world, and you're at the beginning. Click an option below to start your journey.
					</EntryText>
				)}
			</MainTextSection>
			{toggleButtons && (
				<ButtonsSection centered textCentered>
					<Link to="/home">
						<Button onAnimationEnd={() => setText(1)}>
							<Text smallTitle> Enter</Text>
						</Button>
					</Link>
					<a href="http://she.energy/wiki">
						<Button>Learn</Button>
					</a>
					<Link to="/join">
						<Button>Join</Button>
					</Link>
				</ButtonsSection>
			)}
		</Wrapper>
	);
}

export default EntrySection;
