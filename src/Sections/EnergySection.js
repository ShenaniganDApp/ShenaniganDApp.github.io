import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Wrapper = styled.div`
	height: auto;
	width: 75vw;
	margin-top: 10rem;
	display: flex;
	padding-bottom: 5%;
	justify-content: center;
	flex-wrap: wrap;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
`;

const TopLeftSection = styled(Section)`
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	z-index: 1;
	width: 60%;
	@media (max-width: 768px) {
		z-index: 0;
		width: 90%;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		border-bottom-left-radius: 0px;
		border: none;
	}
`;

const TopRightSection = styled(Section)`
  width: 40%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  /* border: 2vw solid ${colors.lightcyan}; */
  z-index: 0;
  /* background: rgba(208, 0, 108, 0.7) url(${require('../svg/ethereumLogo.svg')}); */
  background-size: 60% 60%;
  background-position: 50% 80%;
  background-repeat: no-repeat;
  /* Preserve aspect ratio */
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    z-index: 1;
    margin-top: -0.5rem;
    width: 90%;
    border: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 0px;
    background-position: 50% 50%;
  }
`;

const UpperTextSection = styled(Section)`
	width: 40%;
	margin: 1rem 0rem 10% 0rem;
	align-items: flex-start;
`;

const BoldText = styled(Text)`
	font-weight: 900;
	background: -webkit-radial-gradient(${colors.lightcyan} 50%, rgb(208, 0, 108));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-family: 'Electro-Shackle', sans-serif;
	@media (max-width: 768px) {
		font-size: 5vw;
	}
`;

const MockupSection = styled(Section)`
	width: 65%;
	margin: 1rem 0rem 1rem -8rem;
	@media (max-width: 768px) {
		margin: 1rem -1rem 1rem -2rem;
	}
`;

const MockupImg = styled.img`
	margin-top: auto;
	flex: 0 auto;
	width: 100%;
	@media (max-width: 768px) {
		display: block;
		width: 75%;
		height: 100%;
	}
`;

const StyledLink = styled(Link)`
	width: 80%;
	margin: 1rem auto 0rem;
	border-radius: 15px;
`;
const Button = styled.div`
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 4vw;
	box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
	border-radius: 15px;
	border: 2px solid ${colors.deeppink};
	color: ${colors.lightcyan};
	min-height: 2.5rem;
	margin: 1rem auto 0rem;
	backdrop-filter: blur(5px);
	&:hover {
		transform: scale(0.9);
		background-color: ${colors.lightcyan};
		color: ${colors.deeppink};
	}
`;

const ChargeSection = styled(Section)`
	font-size: 12px;
	font-size: 2.2vw;
	font-family: Electro-Shackle, sans-serif;

	@media (max-width: 768px) {
		font-size: 4vw;
	}
`;

const TitleText = styled(Text)`
	width: 100%;
	font-size: 2.2vw;
	font-family: GreenScreen;
`;

const Divider = styled.div`
	width: 150%;
	height: 0.5vw;
	max-height: 0.3rem;
	background-color: black;
`;

const PlayerContainer = styled.div`
	width: 80vw;
	height: 45vw;
	margin-top: 25rem;
	margin-bottom: 25rem;
	z-index: 1;
	@media (max-width: 768px) {
		margin-top: 5rem;
		width: 98vw;
		height: 53.25vw;
		margin-bottom: 10rem;
	}
`;

function EnergySection(props, ref) {
	const energyRef = useRef();
	useImperativeHandle(ref, () => ({
		boundingTop: () => {
			return energyRef.current.getBoundingClientRect().top;
		},
	}));

	return (
		<Wrapper ref={energyRef} id="energy">
			<TopLeftSection shadowed margin={'0 0 0 0'} backgroundColor={colors.lightcyan}>
				<MockupSection centered>
					<MockupImg src={require('../images/iphoneMockup.png')} />
				</MockupSection>
				<UpperTextSection>
					<Section centered width={'100%'}>
						<Text width={'100%'}>
							<Text width={'100%'} title color={'black'}>
								LIve
							</Text>
							<Text width={'100%'} title color={'black'}>
								Sports
							</Text>
							<Text width={'100%'} title color={colors.deeppink} shadowed={colors.deeppink}>
								TradIng
							</Text>
							<Text width={'100%'} title color={'black'}>
								Cards
							</Text>
						</Text>
					</Section>
					<Divider />
					<Section width={'100%'}>
						<ChargeSection centered margin={'10% -1rem 1rem 0rem'}>
							<Text margin={'5% 0 0 5%'} width={'100%'} main>
								Rise up to the challenge or fall into the wake
							</Text>

							<Text margin={'10% 0 0 5%'} width={'100%'} main>
								Motivate ones self
							</Text>
							<Text margin={'10% 0 0 5%'} width={'100%'} main>
								Connect with friends and foes
							</Text>
							{/* <Text margin={'1rem 0'}>Build Your CommunIty</Text>
                <Text margin={'1rem 0'}>BEcomE Your BEst</Text> */}
						</ChargeSection>
					</Section>
				</UpperTextSection>
			</TopLeftSection>
			<TopRightSection shadowed curved backgroundColor={'rgba(208,0,108,0.7)'}>
				<Section margin={'3rem 1rem 1rem 2rem'}>
					<Text>
						<BoldText size={'3vw'} color={colors.lightcyan}>
							Athlete PredIctIon Markets&nbsp;
						</BoldText>
						<Text shadowed main margin={'1rem 0 0 1rem'} color={colors.lightcyan}>
							Shenanigan hosts a virtual crowd with a positive and negative dichotomy. Predict outcomes and
							give the streamer a reason to improve.
						</Text>
					</Text>
					<Section width={'100%'} margin={'2rem 0 0 0'}>
						<BoldText size={'3vw'} color={colors.lightcyan}>
							We&nbsp;&nbsp;Are&nbsp;&nbsp;
						</BoldText>
						<BoldText size={'3vw'} color={colors.lightcyan}>
							She&nbsp;
						</BoldText>
						<Text shadowed main margin={'1rem 0 0 1rem'} color={colors.lightcyan}>
							Login and be a part of a competitive arena where the people must invest in athletic drive and
							power of will.
						</Text>
					</Section>
					<StyledLink style={{ textDecoration: 'none' }} to="/explain">
						<Button>
							<Text main>Read More</Text>
						</Button>
					</StyledLink>
				</Section>
			</TopRightSection>
			<PlayerContainer>
				<ReactPlayer
					url="https://youtu.be/RmIfGaPTgUs"
					width="100%"
					height="100%"
					controls="true
          "
				/>
			</PlayerContainer>
		</Wrapper>
	);
}

export default forwardRef(EnergySection);
