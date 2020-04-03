import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  background: black;
  flex-wrap: wrap;
`;

const ContentSection = styled(Section)`
  margin: 1rem 2rem;
  padding: 4rem;
  min-width: 10vw;
  min-height: 10vw;
`;

const StyledBackdrop = styled(Backdrop)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5em;
  background-color: black;
`;
const TextSection = styled(Section)`
  margin-bottom: 10rem;
  width: 80%;
  font-size: 9vw;
  font-weight: 900;
  font-family: 'Electro-Shackle', sans-serif;
  justify-content: center;
`;

const SocialSection = styled(Section)`
  justify-content:center;
`

const SocialImg = styled.img`
  transition:.3s;
  background: rgba(0,0,0,0);
  width:4vw;
  min-width: 2rem;
  margin: 1rem 4vw;

  &:hover {
      transform: scale(1.2);
    }
`


function ContactSection(props, ref) {
  const contactRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return contactRef.current.getBoundingClientRect().top;
    }
  }));

  return (
    <Wrapper ref={contactRef} img={'./images/scoreboard.jpg'} id="contact">
      <Divider />
      <StyledBackdrop background={'black'}>
        <Section margin={"2rem 0"} centered width={"100%"}>
          <Text main color={colors.lightcyan}>We're on all popular social media outlets</Text>
        </Section>
        <Section title centered width={"100%"}>
            <a href="https://www.facebook.com/shenanigan.dapp/">
              <SocialImg src={require('../svg/facebook.svg')} />
            </a>
            <a href="https://www.instagram.com/she.dapp/">
              <SocialImg src={require('../svg/instagram.svg')} />
            </a>
            <a href="https://twitter.com/She_Dapp">
              <SocialImg src={require('../svg/twitter.svg')} />
            </a>
            <a href="https://www.reddit.com/user/shenanigan_dapp">
              <SocialImg src={require('../svg/reddit.svg')} />
            </a>
            <a href="https://riot.im/app/#/group/+shenanigan:matrix.org">
              <SocialImg src={require('../svg/riot.svg')} />
            </a>
            <a href="https://www.youtube.com/channel/UCyENEycuNXfntLJLSeIuWXw">
              <SocialImg src={require('../svg/youtube.svg')} />
            </a>
            <a href="https://github.com/ShenaniganDApp">
              <SocialImg src={require('../svg/github.svg')} />
            </a>
        </Section>
        <Section margin={"2rem 0"} centered width={"100%"}>
          <Text main color={colors.lightcyan}>Coming Soon</Text>
        </Section>
        <Section margin={"2rem 0"} centered width={"100%"}>
          <Text main color={colors.lightcyan}>MMXX - No Rights Reserved -{' '}</Text>
          <Text main color={colors.deeppink}> Shenanigan</Text>
        </Section>
      </StyledBackdrop>
    </Wrapper>
  );
}

export default forwardRef(ContactSection);
