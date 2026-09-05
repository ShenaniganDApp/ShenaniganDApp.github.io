import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import ReactCardFlipModule from 'react-card-flip';
import pacmanImage from '../images/pacman3D.png';
import blinkyImage from '../images/blinky.png';
import victorImage from '../images/victor.jpeg';
import pinkyImage from '../images/pinky.png';
import logoImage from '../images/SHELogo_Final.png';
import inkyImage from '../images/inky.png';
import malikImage from '../images/malik.jpg';

const cardContainerStyle = {
	width: '100%',
	height: '100%',
	margin: '1rem 0',
};

const ReactCardFlip = ReactCardFlipModule.default ?? ReactCardFlipModule;

const Wrapper = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	justify-content: center;
	background: black;
	flex-wrap: wrap;
`;

const StyledBackdrop = styled(Backdrop)`
	width: 100%;
	padding-top: 15rem;
	padding-bottom: 15rem;
	display: flex;
	flex-wrap: wrap;
`;

const TextSection = styled(Section)`
	margin-bottom: 10rem;
	width: 80%;
	font-size: 9vw;
	font-weight: 900;
	font-family: 'Electro-Shackle', sans-serif;
	justify-content: center;
	@media (max-width: 768px) {
		margin-bottom: 5rem;
	}
`;

const TeamImg = styled.img`
	margin: 2rem 0;
	flex: 0 auto;
	width: 25%;
	@media (max-width: 768px) {
		display: block;
		width: 30%;
		max-height: 30%;
	}
`;

const CardSection = styled(Section).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop) && prop !== 'flipNum',
})`
	transition: 0.2s;
	margin: auto;
	${(props) =>
		props.flipNum === null &&
		css`
			&:hover {
				-webkit-filter: grayscale(50%);
				filter: grayscale(50%);
				transform: rotateY(13deg);
				background-color: rgba(255, 255, 255, 0.2);
			}
		`}
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
`;

const TeamGhost = styled.img`
	transition: 0.2s;
	width: 40%;
	min-width: 80px;
	border-radius: 10px;

	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: 768px) {
		width: 30%;
	}
`;

const BoxLink = styled.a`
	width: 100%;
	justify-content: center;
`;

const ImageText = styled(Text)`
	font-family: Electro-Shackle;
	position: absolute;
	bottom: 0%;
	left: 50%;
	transform: translate(-50%, 0);
	text-decoration: underline;
`;

const MemberSection = styled(Section)`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 1rem;
	align-items: center;
	justify-items: center;
	@media (max-width: 768px) {
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr;
	}
`;

function TeamSection(_props, ref) {
	const teamRef = useRef();
	useImperativeHandle(ref, () => ({
		boundingTop: () => {
			return teamRef.current.getBoundingClientRect().top;
		},
	}));

	const [flipNum, setFlipNum] = useState(null);
	const handleClick = (num) => {
		if (num === flipNum) {
			setFlipNum(null);
		} else {
			setFlipNum(num);
		}
	};

	return (
		<Wrapper ref={teamRef} id="team">
			<StyledBackdrop
				background={
					'radial-gradient(circle at 65% 107%, rgba(255,255,68,0.5) 0%, rgba(208,0,108,0.5) 55%, black 70%)'
				}
			>
				<TeamImg src={pacmanImage} alt="" loading="lazy" decoding="async" />
				<TextSection margin={'0 100%'}>
					<Text shadowed={colors.lightcyan} color={colors.lightcyan}>
						Team
					</Text>
				</TextSection>
				<MemberSection centered>
					<ReactCardFlip
						containerStyle={cardContainerStyle}
						isFlipped={flipNum === 0}
						flipDirection="horizontal"
					>
						<CardSection
							flipNum={flipNum}
							width={'80%'}
							height={'100%'}
							centered
							onClick={() => handleClick(0)}
						>
							<Section centered width="100%">
								<Text title color={colors.lightcyan}>
									VIctor
								</Text>
							</Section>
							<Section centered width="100%">
								<TeamGhost src={blinkyImage} alt="" loading="lazy" decoding="async" />
							</Section>
							<Text main margin={'1rem 0 0 0'} color={colors.lightcyan}>
								Founder/CTO
							</Text>
						</CardSection>
						<Section width={'80%'} centered margin={'auto'} onMouseLeave={() => handleClick(null)}>
							<Section centered width="100%">
								<Text title color={colors.lightcyan}>
									VIctor
								</Text>
							</Section>
							<Section textCentered centered width="100%">
								<BoxLink
									href="https://www.3box.io/0xe8adaea0ba507a28d1309051beceb4db7fe377af"
									target="_blank"
									rel="noreferrer"
									aria-label="Victor's 3Box profile"
								>
									<TeamGhost src={victorImage} alt="Victor" loading="lazy" decoding="async" />
									<ImageText size="calc(1rem + 2vw)" shadowed={'black'} color={colors.lightcyan}>
										3BOX
									</ImageText>
								</BoxLink>
							</Section>
						</Section>
					</ReactCardFlip>
					<ReactCardFlip
						containerStyle={cardContainerStyle}
						isFlipped={flipNum === 1}
						flipDirection="horizontal"
					>
						<CardSection
							flipNum={flipNum}
							width={'80%'}
							textCentered
							centered
							onClick={() => handleClick(1)}
						>
							<Section centered width="100%">
								<Text title color={colors.lightcyan}>
									Gabe
								</Text>
							</Section>
							<Section centered width="100%">
								<TeamGhost src={pinkyImage} alt="" loading="lazy" decoding="async" />
							</Section>
							<Text main margin={'1rem 0 0 0'} color={colors.lightcyan}>
								Graphic Designer
							</Text>
						</CardSection>
						<Section
							margin={'auto'}
							width={'80%'}
							textCentered
							centered
							onMouseLeave={() => handleClick(null)}
						>
							<Section centered width="100%">
								<Text title color={colors.lightcyan}>
									Gabe
								</Text>
							</Section>
							<Section textCentered centered width="100%">
								<TeamGhost src={logoImage} alt="Gabe" loading="lazy" decoding="async" />
							</Section>
						</Section>
					</ReactCardFlip>
					<ReactCardFlip
						containerStyle={cardContainerStyle}
						isFlipped={flipNum === 2}
						flipDirection="horizontal"
					>
						<CardSection
							flipNum={flipNum}
							width={'80%'}
							textCentered
							centered
							onClick={() => handleClick(2)}
						>
							<Section centered width="100%">
								<Text title color={colors.lightcyan}>
									MalIk
								</Text>
							</Section>
							<Section centered width="100%">
								<TeamGhost src={inkyImage} alt="" loading="lazy" decoding="async" />
							</Section>
							<Text main margin={'1rem 0 0 0'} color={colors.lightcyan}>
								Social Media & Photography
							</Text>
						</CardSection>
						<Section
							margin={'auto'}
							width={'80%'}
							textCentered
							centered
							onMouseLeave={() => handleClick(null)}
						>
							<Section centered width="100%">
								<Text title color={colors.lightcyan}>
									MalIk
								</Text>
							</Section>
							<Section textCentered centered width="100%">
								<TeamGhost src={malikImage} alt="Malik" loading="lazy" decoding="async" />
							</Section>
						</Section>
					</ReactCardFlip>
				</MemberSection>
			</StyledBackdrop>
		</Wrapper>
	);
}

export default forwardRef(TeamSection);
