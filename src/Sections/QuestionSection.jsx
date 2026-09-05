import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Section, Text, colors } from '../styles';

const questions = [
	{
		question: 'What does Shenanigan do?',
		answer:
			"Shenanigan is an entertainment platform directed toward gamifying athlete's intense lives. We use provably fair NFT cards (NRG) to capture an athlete's likeness and measure their growth. Shenanigan hosts a livestream of an athlete who and allows people to stake cards on the outcomes of the stream.",
	},
	{
		question: 'How does Shenanigan work?',
		answer:
			'Shenanigan uses the Ethereum blockchain to collect predictions for our streamed athletes. Users, known as particles, stake their NFT cards and cheer the athlete or athletes on from chat. Athletes, also called iOns, set challenges for themselves to accomplish. Once a challenge attempt has completed a multi-tiered voting mechanism is used to decide the outcome. Winners are automatically dealt their NFT winnings using smart contracts',
	},
	{
		question: 'What is an NRG Card?',
		answer:
			"NRG Cards are a lot like the baseball cards of the 1980s, except we're in the future. With provable uniqueness and security, NRG cards are non-fungibles (NFT) on the Ethereum blockchain that can be traded securely with anyone around the world. Each NRG Card carries unique attributes. A unique address, series number, athlete statistics, etc. Read more on our learn page.",
	},
	{
		question: 'How much does it cost?',
		answer:
			'Shenanigan app is free on iOS and Android. You will not need an Ethereum address to use basic app functionalities, such as watching the stream. Athletes who plan to stream are offered a one-time in-app purchase to assist with setting up a trading card.',
	},
	{
		question: 'What is different about Shenanigan?',
		answer:
			'Shenanigan aims to uproot the current social media shill culture. Currently many athletes are required to sell ads with sponsorships or work remedial jobs to make money. Youtube, Twitch, and Instagram are not made with improvement in mind. Shenanigan opens up a non-affiliated revenue stream for athletes',
	},
	{
		question: 'Can I trust Shenanigan?',
		answer:
			'Shenanigan adheres by a few strict rules. All our code is open sourced, all our funds are held in our DAO, and Shenanigan does not touch any money. All money is routed through the Ethereum blockchain where transactions are publicly available.',
	},
	{
		question: 'What is a prediction market?',
		answer:
			'While slightly different from traditional prediction markets, Shenanigan stakes collectible cards to indicate what the crowd thinks the probability of the event is. Traders with different beliefs trade on contracts whose payoffs are related to the unknown future outcome and the market prices of the contracts are considered as the aggregated belief. In other words, the option with the highest volume of cards staked is the most likely outcome.',
	},
];

const Wrapper = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	position: relative;
	justify-content: center;
`;

const TitleSection = styled(Section)`
	width: 20%;
	height: 10%;
	position: absolute;
	top: -10%;
	right: 15%;
	background: rgba(208, 0, 108, 0.7);
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	@media (max-width: 768px) {
		right: 10%;
	}
`;

const BorderWrapper = styled.div`
	width: 74vw;
	padding: 1rem;
	background: radial-gradient(circle at 65% 93%, rgba(255, 255, 68, 0.7) 0%, rgba(208, 0, 108, 0.7) 55%);
	border-radius: 25px;
	@media (max-width: 768px) {
		border-radius: 0 0 25px 25px;
		width: 100vw;
		padding: 1rem 0;
	}
`;
const QuestionWrapper = styled(Section)`
	border-radius: inherit;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(15px);
`;
const ContentSection = styled(Section)`
	transition: 0.2s;
	user-select: none;
	width: 100%;
	border-bottom: 2px solid rgba(208, 0, 108, 0.7);

	&:last-child {
		border: none;
	}
`;

const QuestionButton = styled.button`
	width: 100%;
	margin: 0;
	padding: 1rem;
	border: 0;
	background: transparent;
	color: ${colors.lightcyan};
	cursor: pointer;
	font-family: GreenScreen;
	font-size: 2vw;
	text-align: left;

	@media (max-width: 768px) {
		font-size: 3vw;
	}
`;

const AnswerSection = styled(Section).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) =>
		defaultValidatorFn(prop) && !['expanded', 'last'].includes(prop),
})`
	transition: 0.2s ease-out;
	width: 100%;
	max-height: 0;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.6);
	${(props) =>
		props.expanded &&
		css`
			max-height: 100%;
			padding: 2rem 2rem;
		`}

	${(props) =>
		props.last &&
		css`
			border-bottom-left-radius: 25px;
			border-bottom-right-radius: 25px;
		`}
`;

const AnswerText = styled(Text)`
	color: ${colors.lightcyan};
	font-family: GreenScreen;
	font-size: 1.25vw;
	@media (max-width: 768px) {
		font-size: 13px;
	}
`;

const Button = styled.div`
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	padding: 1vw 2vw;
	box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
	border-radius: 15px;
	border: 2px solid ${colors.deeppink};
	color: ${colors.lightcyan};
	min-height: 2.5rem;
	margin: 1rem auto;
	backdrop-filter: blur(5px);
	&:hover {
		transform: scale(0.9);
		background-color: rgba(0, 0, 0, 0.6);
		color: ${colors.deeppink};
	}
`;

function QuestionSection(_props, ref) {
	const questionRef = useRef();
	useImperativeHandle(ref, () => ({
		boundingTop: () => {
			return questionRef.current.getBoundingClientRect().top;
		},
	}));

	const [collapsibleNum, setCollapsibleNum] = useState(null);

	const onClickCollapsible = (num) => {
		if (num === collapsibleNum) {
			setCollapsibleNum(null);
		} else {
			setCollapsibleNum(num);
		}
	};

	return (
		<Wrapper ref={questionRef} id="question">
			<TitleSection centered textCentered>
				<Text title color={colors.lightcyan}>
					FAQ
				</Text>
			</TitleSection>
			<BorderWrapper>
				<QuestionWrapper>
					{questions.map(({ question, answer }, index) => {
						const expanded = collapsibleNum === index;
						return (
							<ContentSection
								key={question}
								noSelect
							>
								<QuestionButton
									type="button"
									aria-expanded={expanded}
									onClick={() => onClickCollapsible(index)}
								>
									{question}
								</QuestionButton>
								<AnswerSection expanded={expanded}>
									<AnswerText shadowed={colors.deeppink}>{answer}</AnswerText>
								</AnswerSection>
							</ContentSection>
						);
					})}
				</QuestionWrapper>
				<a
					style={{ textDecoration: 'none' }}
					href="http://she.energy/docs/whitepaper"
					aria-label="Read the Whitepaper"
				>
					<Button>
						<Text largeMain color={colors.lightcyan}>
							Read the Whitepaper
						</Text>
					</Button>
				</a>
			</BorderWrapper>
		</Wrapper>
	);
}

export default forwardRef(QuestionSection);
