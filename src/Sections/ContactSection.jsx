import { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import { Section, Text, Backdrop, colors } from '../styles';
import facebookIcon from '../svg/facebook.svg';
import instagramIcon from '../svg/instagram.svg';
import twitterIcon from '../svg/twitter.svg';
import redditIcon from '../svg/reddit.svg';
import discordIcon from '../svg/discord.svg';
import youtubeIcon from '../svg/youtube.svg';
import githubIcon from '../svg/github.svg';
import aragonLogo from '../svg/Powered_By_Blue.svg';

const socialLinks = [
  ['Facebook', 'https://www.facebook.com/shenanigan.dapp/', facebookIcon],
  ['Instagram', 'https://www.instagram.com/she.dapp/', instagramIcon],
  ['Twitter', 'https://twitter.com/She_Dapp', twitterIcon],
  ['Reddit', 'https://www.reddit.com/user/shenanigan_dapp', redditIcon],
  ['Discord', 'https://discord.gg/eThfUxt', discordIcon],
  ['YouTube', 'https://www.youtube.com/channel/UCyENEycuNXfntLJLSeIuWXw', youtubeIcon],
  ['GitHub', 'https://github.com/ShenaniganDApp', githubIcon],
];
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

function ContactSection(_props, ref) {
  const contactRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return contactRef.current.getBoundingClientRect().top;
    },
  }));

  return (
    <Wrapper ref={contactRef} id="contact">
      <Divider />
      <StyledBackdrop background={'black'}>
        <Section centered width={'100%'}>
          {socialLinks.map(([name, href, icon]) => (
            <a key={name} href={href} aria-label={name}>
              <SocialImg src={icon} alt="" loading="lazy" decoding="async" />
            </a>
          ))}
        </Section>
        <Section margin={'1rem 0 2rem 0'} centered width={'100%'}>
          <AragonLink href="https://mainnet.aragon.org/#/shenanigan" aria-label="Shenanigan on Aragon">
            <AragonImage src={aragonLogo} alt="Powered by Aragon" loading="lazy" decoding="async" />
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
