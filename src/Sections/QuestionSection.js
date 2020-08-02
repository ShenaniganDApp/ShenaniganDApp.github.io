import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import styled, { css } from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';

const isPhone = window.innerWidth <= 768;

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
  background: radial-gradient(
    circle at 65% 93%,
    rgba(255, 255, 68, 0.7) 0%,
    rgba(208, 0, 108, 0.7) 55%
  );
  border-radius: 25px;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
const QuestionWrapper = styled(Section)`
  border-radius: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
`;
const ContentSection = styled(Section)`
  transition: 0.2s;
  cursor: pointer;
  user-select: none;
  width: 100%;
  border-bottom: 2px solid rgba(208, 0, 108, 0.7);

  &:last-child {
    border: none;
  }
`;

const AnswerSection = styled(Section)`
  transition: 0.2s ease-out;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  background-color: rgba(230, 255, 255, 0.6);
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
  font-family: GreenScreen;
  font-size: 17px;
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

function QuestionSection(props, ref) {
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
    <Wrapper ref={questionRef} img={'./images/scoreboard.jpg'} id="question">
      <TitleSection centered textCentered>
        <Text title color={colors.lightcyan}>
          FAQ
        </Text>
      </TitleSection>
      <BorderWrapper>
        <QuestionWrapper>
          <ContentSection
            expanded={collapsibleNum == 0}
            onClick={() => onClickCollapsible(0)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                What is Ethereum?
              </Text>
            </Section>
            <AnswerSection expanded={collapsibleNum == 0}>
              <AnswerText shadowed={colors.lightcyan}>
                There are many definitions for Ethereum. In it's most simple
                form, Ethereum is a cryptocurrency that runs a decentralized
                worldwide computer where people pay to keep it secure. ETH is
                the currency used to fund this massive computer.
              </AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 1}
            onClick={() => onClickCollapsible(1)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                Why Ethereum?
              </Text>
            </Section>
            <AnswerSection expanded={collapsibleNum == 1}>
              <AnswerText shadowed={colors.lightcyan}>
                Ethereum is no the only cryptocurrency that supports Dapps.
                However, Ethereum was the first and currently the best place to
                build for users and developers.
              </AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 2}
            onClick={() => onClickCollapsible(2)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                What does Shenanigan do?
              </Text>
            </Section>
            <AnswerSection expanded={collapsibleNum == 2}>
              <AnswerText shadowed={colors.lightcyan}>
                Shenanigan is an entertainment platform directed toward
                gamifying athlete's intense training regiments. Shenanigan hosts
                a livestream of an athlete who is allowed to generate financial
                incentive through placed bets.
              </AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 3}
            onClick={() => onClickCollapsible(3)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                How does Shenanigan work?
              </Text>
            </Section>
            <AnswerSection expanded={collapsibleNum == 3}>
              <AnswerText shadowed={colors.lightcyan}>
                Shenanigan uses the Ethereum blockchain to collect bets and
                donations for our streamed athletes. Users, known as particles,
                pool their money into a betting pot and cheer the athlete or
                athletes on from chat. Winners are automatically dealt their
                winnings using smart contracts
              </AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 4}
            onClick={() => onClickCollapsible(4)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                What is different about Shenanigan?
              </Text>
            </Section>
            <AnswerSection expanded={collapsibleNum == 4}>
              <AnswerText shadowed={colors.lightcyan}>
                Shenanigan aims to uproot the current social media shill
                culture. Currently many athletes are required to sell ads with
                sponsorships or work remedial jobs to make money. Youtube,
                Twitch, and Instagram are not made with athletes imprpvement in
                mind. Shenanigan opens a new, non-affiliated revenue stream for
                athletes
              </AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 5}
            onClick={() => onClickCollapsible(5)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                Can I trust Shenanigan?
              </Text>
            </Section>
            <AnswerSection expanded={collapsibleNum == 5}>
              <AnswerText shadowed={colors.lightcyan}>
                Shenanigan adheres by a few strict rules. All our code is open
                sourced, all our funds are held in our DAO, and Shenanigan does
                not touch any betting money. All money is routed through the
                Ethereum blockchain where transactions are publicly available.
              </AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 6}
            onClick={() => onClickCollapsible(6)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                Is the betting legal?
              </Text>
            </Section>
            <AnswerSection last expanded={collapsibleNum == 6}>
              <AnswerText shadowed={colors.lightcyan}>
                Coming soon but short answer, yes
              </AnswerText>
            </AnswerSection>
          </ContentSection>
        </QuestionWrapper>
        <a style={{textDecoration:"none"}} href="http://she.energy/wiki/whitepaper">
          <Button>
            <Text main color={colors.lightcyan}>
              Read the Whitepaper
            </Text>
          </Button>
        </a>
      </BorderWrapper>
    </Wrapper>
  );
}

export default forwardRef(QuestionSection);
