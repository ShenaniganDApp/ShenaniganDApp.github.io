import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import styled, { css } from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';

const isPhone = window.innerWidth <= 768;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  position:relative;
`;

const TitleSection = styled(Section)`
 width: 20%;
 height: 10%;
 position:absolute;
 top:-10%;
 right:15%;
 background: rgba(208, 0, 108, 0.7);
 border-top-left-radius: 25px;
 border-top-right-radius: 25px;
 @media (max-width: 768px) {
  right:10%;
  }
`

const BorderWrapper = styled.div`
  width: 74vw;
  padding: 1vw;
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
  background-color: rgba(230, 255, 255,0.6);
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
    <TitleSection centered textCentered><Text title color={colors.lightcyan}>FAQ</Text></TitleSection>
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
                Ethereum is a decentralized worldwide computer that people pay
                to keep secure. ETH is the currency used to fund this massive
                computer.
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
                There are many cryptocurrencies that support Dapps. Ethereum is
                the first and has the largest ecosystem for users and
                developers.
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
              <AnswerText>Coming Soon</AnswerText>
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
              <AnswerText>Coming Soon</AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 4}
            onClick={() => onClickCollapsible(4)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                Is the betting legal?
              </Text>
            </Section>
            <AnswerSection expanded={collapsibleNum == 4}>
              <AnswerText>Coming Soon</AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 5}
            onClick={() => onClickCollapsible(5)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                Coming Soon
              </Text>
            </Section>
            <AnswerSection expanded={collapsibleNum == 5}>
              <AnswerText>Coming Soon</AnswerText>
            </AnswerSection>
          </ContentSection>
          <ContentSection
            expanded={collapsibleNum == 6}
            onClick={() => onClickCollapsible(6)}
          >
            <Section width={'100%'} margin={'1rem 1rem'}>
              <Text main color={colors.lightcyan}>
                Coming Soon
              </Text>
            </Section>
            <AnswerSection last expanded={collapsibleNum == 6}>
              <AnswerText>Coming Soon</AnswerText>
            </AnswerSection>
          </ContentSection>
        </QuestionWrapper>
      </BorderWrapper>
    </Wrapper>
  );
}

export default forwardRef(QuestionSection);
