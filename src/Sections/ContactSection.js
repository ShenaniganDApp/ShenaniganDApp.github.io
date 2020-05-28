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
const StyledBackdrop = styled(Backdrop)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5em;
  background-color: black;
`;

const SocialImg = styled.img`
  transition: 0.3s;
  background: rgba(0, 0, 0, 0);
  width: 4vw;
  min-width: 1.5rem;
  margin: 1rem 3vw;

  &:hover {
    transform: scale(1.2);
  }
`;
const AragonImage = styled.img`
  width: 27%;
`;

const AragonLink = styled.a`
  text-align: center;
`;

function ContactSection(props, ref) {
  const contactRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return contactRef.current.getBoundingClientRect().top;
    },
  }));

  return (
    <Wrapper ref={contactRef} img={'./images/scoreboard.jpg'} id="contact">
      <Divider />
      <StyledBackdrop background={'black'}>
        <Section title centered width={'100%'}>
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
          <a href="https://discord.gg/eThfUxt">
            <SocialImg src={require('../svg/discord.svg')} />
          </a>
          <a href="https://www.youtube.com/channel/UCyENEycuNXfntLJLSeIuWXw">
            <SocialImg src={require('../svg/youtube.svg')} />
          </a>
          <a href="https://github.com/ShenaniganDApp">
            <SocialImg src={require('../svg/github.svg')} />
          </a>
        </Section>
        <Section margin={'1rem 0 2rem 0'} centered width={'100%'}>
          <AragonLink href="https://mainnet.aragon.org/#/shenanigan">
            <AragonImage
              src={require('../svg/Powered_By_Blue.svg')}
            ></AragonImage>
          </AragonLink>
        </Section>
        <Section centered width={'100%'}>
          <Text main color={colors.deeppink}>
            Shenanigan Tech LLC
          </Text>
        </Section>
      </StyledBackdrop>
    </Wrapper>
  );
}

export default forwardRef(ContactSection);
