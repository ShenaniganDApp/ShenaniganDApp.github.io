import {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react';
import styled from 'styled-components';
import { Backdrop, Section, Text, MapFruit, colors } from '../styles';
import { MilestoneContent } from '../components';
import { useScrollPosition } from '../hooks/useScrollPosition';
import watermelonImage from '../images/Roadmap_Pacman_01_Watermelon.png';
import grapeImage from '../images/Roadmap_Pacman_02_Grapes.png';
import appleImage from '../images/Roadmap_Pacman_03_Apple.png';
import strawberryImage from '../images/Roadmap_Pacman_04_Strawberry.png';
import cherryImage from '../images/Roadmap_Pacman_05_Cherries.png';
import mapImage from '../images/Roadmap_Pacman_Map.png';
import mobileMapImage from '../images/Roadmap_Pacman_Map_Mobile.png';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding-top: 20rem;
`;
const MilestoneMainSection = styled(Section)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  width: 100%;
  height: 100%;
  font-family: 'Electro-Shackle', sans-serif;
  justify-content: center;
`;

const MapImage = styled.img`
  width: 65%;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const WatermelonMapImage = styled(MapFruit)`
  left: 21%;
  width: 6%;
  @media (max-width: 768px) {
    left: 6%;
    width: 8%;
  }
`;

const GrapeMapImage = styled(MapFruit)`
  left: 30.5%;
  top: 10.5%;
  @media (max-width: 768px) {
    left: 20%;
    top: 12%;
  }
`;
const AppleMapImage = styled(MapFruit)`
  left: 63.5%;
  top: 31%;
  @media (max-width: 768px) {
    left: 71%;
    top: 32%;
  }
`;

const StrawberryMapImage = styled(MapFruit)`
  left: 69%;
  top: 72%;
  @media (max-width: 768px) {
    left: 80%;
  }
`;

const CherryMapImage = styled(MapFruit)`
  left: 73%;
  top: 94%;
  @media (max-width: 768px) {
    left: 84%;
  }
`;

const StyledBackdrop = styled(Backdrop)`
  font-size: 9vw;
  font-weight: 900;
  font-family: 'Electro-Shackle', sans-serif;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

function MilestoneSection({ height }, ref) {
  const milestoneRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return milestoneRef.current.getBoundingClientRect().top;
    }
  }));
  const isPhone = window.innerWidth <= 768;
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [startLoop, setStartLoop] = useState(false);
  const [touchedMilestone, setTouchedMilestone] = useState(false);

  const showMilestoneContent = () => {
    const watermelon = (
      <MilestoneContent
        imgSrc={watermelonImage}
        title={'Q1 2020'}
        content={'DELIVER OUR MESSAGE TO THE WORLD'}
        left={isPhone ? '18%' : '30%'}
        top={isPhone ? '-10%' : '-5%'}
      />
    );
    const grape = (
      <MilestoneContent
        imgSrc={grapeImage}
        title={'Q2 2020'}
        content={'BUIDL  BUIDL  BUIDL'}
        left={isPhone ? '30%' : '37%'}
        top={'5%'}
      />
    );
    const apple = (
      <MilestoneContent
        imgSrc={appleImage}
        title={'Q3 2020'}
        content={'OPEN SOURCE OUR CODE FOR REVIEW'}
        left={isPhone ? '4%' : '27%'}
        top={'31%'}
      />
    );
    const strawberry = (
      <MilestoneContent
        imgSrc={strawberryImage}
        title={'Q4 2020'}
        content={'GO LIVE WITH SHENANIGAN BETA'}
        left={isPhone ? '12%' : '31%'}
        top={'69%'}
      />
    );
    const cherry = (
      <MilestoneContent
        imgSrc={cherryImage}
        title={'2021'}
        content={'SHENANIGAN RELEASES ON GOOGLE PLAY AND APPLE APP STORES'}
        left={isPhone ? '17%' : '36%'}
        top={'88%'}
      />
    );
    const milestones = [watermelon, grape, apple, strawberry, cherry];
    return milestones[activeMilestone];
  };

  useEffect(() => {
    if (!startLoop || touchedMilestone) return undefined;

    const timeoutId = window.setTimeout(() => {
      setActiveMilestone((current) => (current === 4 ? 0 : current + 1));
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [activeMilestone, startLoop, touchedMilestone]);

  const handleMilestoneTouched = numTouched => {
    if (!touchedMilestone) {
      setTouchedMilestone(true);
    }
    setActiveMilestone(numTouched);
  };

  useScrollPosition(({ currPos }) => {
    if (!startLoop) {
      if (currPos.y <= height) {
        setStartLoop(true);
      }
    }
  });

  return (
    <Wrapper ref={milestoneRef} id="roadmap">
      <StyledBackdrop>
        <Section textCentered margin={'0 0 10vw 0'}>
          <Text shadowed={colors.gold} color={colors.gold}>
            2020&nbsp;
          </Text>
          <Text shadowed={colors.deeppink} color={colors.deeppink}>
            Roadmap
          </Text>
        </Section>
        <MilestoneMainSection width={'100%'}>
          <MapImage
            src={isPhone ? mobileMapImage : mapImage}
            alt="Shenanigan roadmap"
            loading="lazy"
            decoding="async"
          />
          <WatermelonMapImage
            src={watermelonImage}
            alt="Q1 2020"
            loading="lazy"
            decoding="async"
            onMouseOver={() => {
              handleMilestoneTouched(0);
            }}
            onMouseLeave={() => handleMilestoneTouched(null)}
          />
          <GrapeMapImage
            src={grapeImage}
            alt="Q2 2020"
            loading="lazy"
            decoding="async"
            onMouseOver={() => {
              handleMilestoneTouched(1);
            }}
            onMouseLeave={() => handleMilestoneTouched(null)}
          />
          <AppleMapImage
            src={appleImage}
            alt="Q3 2020"
            loading="lazy"
            decoding="async"
            onMouseOver={() => {
              handleMilestoneTouched(2);
            }}
            onMouseLeave={() => handleMilestoneTouched(null)}
          />
          <StrawberryMapImage
            src={strawberryImage}
            alt="Q4 2020"
            loading="lazy"
            decoding="async"
            onMouseOver={() => {
              handleMilestoneTouched(3);
            }}
            onMouseLeave={() => handleMilestoneTouched(null)}
          />
          <CherryMapImage
            src={cherryImage}
            alt="2021"
            loading="lazy"
            decoding="async"
            onMouseEnter={() => {
              handleMilestoneTouched(4);
            }}
            onMouseLeave={() => handleMilestoneTouched(null)}
          />
          {showMilestoneContent()}
        </MilestoneMainSection>
      </StyledBackdrop>
    </Wrapper>
  );
}

export default forwardRef(MilestoneSection);
