import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: auto;
  width: 75vw;
  display: flex;
  padding-bottom: 5%;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1600px;
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
  background: rgba(208, 0, 108, 0.7) url(${require('../svg/ethereumLogo.svg')});
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

const SecondTopSection = styled(Section)`
  border: 2.5vw solid ${colors.lightcyan};
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 0;
  margin-top: 30vh;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    width: calc(90% - 5vw);
  }
`;
const SecondBottomSection = styled(Section)`
  border-width: 0vw 2.5vw 2.5vw 2.5vw;
  border-style: solid;
  border-color: ${colors.lightcyan};
  width: 100%;
  z-index: 1;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  backdrop-filter: blur(5px);
  @media (max-width: 768px) {
    width: calc(90% - 5vw);
  }
`;

const UpperTextSection = styled(Section)`
  width: 40%;
  margin: 1rem 0rem auto 0rem;
  align-items: flex-start;
`;

const LowerTextSection = styled(Section)`
  width: 100%;
  margin: 1rem 1rem 1rem 1rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;
const BoldText = styled(Text)`
  font-weight: 900;
  background: -webkit-radial-gradient(
    ${colors.lightcyan} 50%,
    rgb(208, 0, 108)
  );
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
const Divider = styled.div`
  width: 70%;
  height: 0.5vw;
  max-height: 0.3rem;
  background-color: black;
`;

function EnergySection(props, ref) {
  const energyRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return energyRef.current.getBoundingClientRect().top;
    }
  }));

  return (
    <Wrapper ref={energyRef} id="energy">
      <TopLeftSection
        shadowed
        margin={'0 0 0 0'}
        backgroundColor={colors.lightcyan}
      >
        <MockupSection centered>
          <MockupImg src={require('../images/iphoneMockup.png')} />
        </MockupSection>
        <UpperTextSection>
          <Section width={'100%'}>
            <Text width={'100%'}>
              <Text width={'100%'} title color={'black'}>
                What
              </Text>
              <Text width={'100%'} title color={colors.deeppink}>
                Charges
              </Text>
              <Text width={'100%'} title color={'black'}>
                You?
              </Text>
            </Text>
          </Section>
          <Divider />
          <Section width={'100%'}>
            <ChargeSection centered margin={'10% -1rem 1rem 0rem'}>
              <Text main>
                Set a goal and livestream while you practice and Shenanigan will
                pay you money when you reach that goal.
              </Text>
              {/* <Text margin={'1rem 0'}>Build Your CommunIty</Text>
                <Text margin={'1rem 0'}>BEcomE Your BEst</Text> */}
            </ChargeSection>
          </Section>
        </UpperTextSection>
      </TopLeftSection>
      <TopRightSection shadowed curved backgroundColor={'rgba(208,0,108,0.7)'}>
        <Section margin={'1rem 1rem'}>
          <Text>
            <BoldText size={'3vw'} color={colors.lightcyan}>
              iOns&nbsp;
            </BoldText>
            <Text
              shadowed
              main
              margin={'1rem 0 0 1rem'}
              color={colors.lightcyan}
            >
              Natural ions are made up with both positive and negative energy,
              conjoining to form an energized element as unique as it is
              necessary
            </Text>
          </Text>
          <Section width={'100%'} margin={'2rem 0 0 0'}>
            <BoldText size={'2.7vw'} color={colors.lightcyan}>
              Energy&nbsp;&nbsp;Is&nbsp;&nbsp;
            </BoldText>
            <BoldText size={'2.7vw'} color={colors.lightcyan}>
              Ethereum&nbsp;
            </BoldText>
            <Text
              shadowed
              main
              margin={'1rem 0 0 1rem'}
              color={colors.lightcyan}
            >
              Energize yourself to push further as an athlete. iOns get energy
              from the community to accomplish their goals. You will be the
              center of attention.
            </Text>
          </Section>
          <StyledLink style={{ textDecoration: 'none' }} to="/explain">
            <Button>
              <Text main>Read More</Text>
            </Button>
          </StyledLink>
        </Section>
      </TopRightSection>
      <SecondTopSection
        margin={'4rem 0 0 0'}
        xLarge
        backgroundColor={'rgba(208,0,108,0.7)'}
      >
        <LowerTextSection textCentered>
          <Text shadowed title color={colors.lightcyan}>
            What Is an iOn?
          </Text>
        </LowerTextSection>
        <LowerTextSection>
          <Text shadowed width={'100%'} main color={colors.lightcyan}>
            1. iOns set goals
          </Text>
          <Text shadowed width={'100%'} main color={colors.lightcyan}>
            2. iOns livestream their attempts
          </Text>
          <Text shadowed width={'100%'} main color={colors.lightcyan}>
            3. iOns get energy if their goal is met
          </Text>
        </LowerTextSection>
      </SecondTopSection>
      <SecondBottomSection xLarge backgroundColor={'rgba(31,51,31,0.7)'}>
        <LowerTextSection textCentered>
          <Text shadowed title color={colors.lightcyan}>
            What are PartIcles?
          </Text>
        </LowerTextSection>
        <LowerTextSection textCentered>
          <Text shadowed main color={colors.lightcyan}>
            Particles create a community. A community of particles around an iOn
            athlete will power the streamer, and also share the energy.
          </Text>
        </LowerTextSection>
      </SecondBottomSection>
    </Wrapper>
  );
}

export default forwardRef(EnergySection);
