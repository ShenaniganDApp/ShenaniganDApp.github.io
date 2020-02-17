import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: auto;
  width: 70vw;
  display: flex;
  padding-bottom: 5%;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1600px;
  margin-top: 30rem;
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
  width: 55%;
  @media (max-width: 768px) {
    z-index: 0;
    width: 80%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
    border: none;
  }
`;
const TopRightSection = styled(Section)`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2vw solid ${colors.lightcyan};
  z-index: 0;
  background: rgba(208, 0, 108, 0.7);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
    z-index: 1;
    margin-top: -0.5rem;
    width: 80%;
    border: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 0px;
  }
`;

const BackdropSection = styled(Section)`
  margin:-2rem;
  @media (max-width: 768px) {
    margin:3rem 0rem;
  }
`
const EthLogoBackdrop = styled(Backdrop)`
  margin:0rem 3rem;
  background: url(${require('../svg/ethereumLogo.svg')});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  text-align:center;
`;
const SecondTopSection = styled(Section)`
  text-align: center;
  border: 2.5vw solid ${colors.lightcyan};
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 0;
  margin-top: 30vh;
  @media (max-width: 768px) {
    width: calc(80% - 5vw);
  }
`;
const SecondBottomSection = styled(Section)`
  text-align: center;
  border: 2.5vw solid ${colors.lightcyan};
  width: 100%;
  z-index: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: s 15px;
  @media (max-width: 768px) {
    width: calc(80% - 5vw);
  }
`;

const UpperTextSection = styled(Section)`
  width: 100%;
  margin: 1rem -1rem 0rem 1rem;
  @media (max-width: 768px) {
    margin: 1rem;
  }
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

const MockupImg = styled.img`
  display: block;
  margin-top: 2rem;
  flex: 0 auto;
  height: auto;
  width: 50%;
`;
const Button = styled.div`
  transition: 0.3s;
  margin-bottom: -2rem;
  width: 100%;
  height: 2rem;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px;
  border-radius: 15px;
  border: 2px solid ${colors.deeppink};
  color: ${colors.lightcyan};
  text-align: center;
  display: inline-block;
  &:hover {
    transform: scale(0.9);
    background-color: ${colors.lightcyan};
    color: ${colors.deeppink};
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
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
        <UpperTextSection centered>
          <Text title color={'black'}>
            What&nbsp;
          </Text>
          <Text title color={'black'}>
            Charges You?
          </Text>

          <MockupImg src={require('../images/iphoneMockup.png')} />
        </UpperTextSection>
      </TopLeftSection>
      <TopRightSection
        width={'35%'}
        curved
        backgroundColor={'rgba(208,0,108,0.7)'}
      >
        
        <EthLogoBackdrop background={`rgba(208,0,108,0.0)`}>
          <BackdropSection margin={'-2rem'}>
            <BoldText size={'3vw'} color={colors.lightcyan}>
              iOns&nbsp;
            </BoldText>
            <Text shadowed main color={colors.lightcyan}>
              need both&nbsp;
            </Text>
            <Text shadowed main color={colors.lightcyan}>
              positive and negative&nbsp;
            </Text>
            <Text shadowed main color={colors.lightcyan}>
              particles to exist
            </Text>
            <Section centered width={'100%'} margin={'3rem 0 0 0'}>
              <BoldText size={'2.7vw'} color={colors.lightcyan}>
                Energy =&nbsp;
              </BoldText>
              <BoldText size={'2.7vw'} color={colors.lightcyan}>
                Ethereum&nbsp;
              </BoldText>
              <Text shadowed main color={colors.lightcyan}>
                Energize yourself to push further as an athlete. iOns are the
                center of attention.
              </Text>
            </Section>
          </BackdropSection>
          <Link style={{ textDecoration: 'none' }} to="/explain">
            <Button>
              <Text main>Learn More</Text>
            </Button>
          </Link>
        </EthLogoBackdrop>
      </TopRightSection>
      <SecondTopSection
        textCentered
        shadowed
        margin={'4rem 0 0 0'}
        xLarge
        backgroundColor={'rgba(208,0,108,0.7)'}
      >
        <LowerTextSection>
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
      <SecondBottomSection
        textCentered
        shadowed
        xLarge
        backgroundColor={'rgba(31,51,31,0.7)'}
      >
        <LowerTextSection>
          <Text shadowed title color={colors.lightcyan}>
            What are PartIcles?
          </Text>
        </LowerTextSection>
        <LowerTextSection>
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
