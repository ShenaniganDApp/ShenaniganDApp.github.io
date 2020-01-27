import React, { useState, useEffect, useRef } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import styled, { css, keyframes } from 'styled-components';
import { Text, HeaderToggle, LogoFrame } from './styles';
import { HashLink as Link } from 'react-router-hash-link';

const Wrapper = styled.div`
  display: flex;
  height: 5vw;
  min-height: 3rem;
  max-height: 4rem;
  position: sticky;
  z-index: 100;
  top: 0;
  justify-content: ${props =>
    props.collapsed ? 'space-between' : ' flex-start'};
`;

const Logo = styled.img`
  width: auto;
  height: 80%;
  max-width: 80%;
`;
const Nav = styled.div`
  transition: backdrop-filter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s,
    background 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  z-index: 1;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  ${props =>
    props.scrolled &&
    css`
      backdrop-filter: blur(20px);
      background: rgba(0, 0, 0, 0.8);
      margin: 0 0 0 -1rem;
    `}
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  flex: 1;
  padding-left: 1em;
  padding-right: 1em;
  height: 100%;
  min-width: 50px;
  margin: 0 -1em;

  ${props =>
    props.scrolled &&
    css`
      margin-top: -1rem 0px;
    `}

  &:hover {
    transform: scale(1.1);
  }
`;

const TabLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 100%;
  min-width: 5rem;
  ${props =>
    props.selected &&
    css`
      backdrop-filter: blur(20px);
      background: rgba(0, 0, 0, 0.8);
      width: 20%;
      margin-left: auto;
      border-radius: 0px 0px 0px 30px;
      height: 100%;
    `}
`;

const HomeLink = styled(Link)`
  z-index: 100;
  margin-left: 2%;
`;

const Hamburger = styled.img`
  width: auto;
  height: 80%;
  max-width: 80%;
`;

function Header(props) {
  const [headerOn, setHeader] = useState();
  const [collapsed, setCollapsed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const isPhone = window.innerWidth <= 768;
  useEffect(() => {
    if (!scrolled && headerOn == 0 && !isPhone) {
      setCollapsed(false);
    }
    if (isPhone) {
      setCollapsed(true);
    }
  }, [scrolled, headerOn, isPhone]);

  const handleHeaderChange = selection => {
    if (!collapsed) {
      setCollapsed(true);
    }
    setOpenMenu(false);
    setHeader(selection);
  };

  const toggleMenu = () => {
    setHeader(0);
    setOpenMenu(true);
  };

  const headerSelected = () => {
    const energy = (
      <TabLink
        scrolled={scrolled}
        selected
        onClick={() => handleHeaderChange(1)}
        to="/#energy"
      >
        <Tab selected>
          <Text header color={'#e6ffff'}>
            Energy
          </Text>
        </Tab>
      </TabLink>
    );
    const milestone = (
      <TabLink
        scrolled={scrolled}
        selected
        onClick={() => handleHeaderChange(2)}
        to="/#roadmap"
      >
        <Tab selected>
          <Text header color={'#e6ffff'}>
            Road Map
          </Text>
        </Tab>
      </TabLink>
    );
    const about = (
      <TabLink
        scrolled={scrolled}
        selected
        onClick={() => handleHeaderChange(3)}
        to=""
      >
        <Tab selected>
          <Text header color={'#e6ffff'}>
            About
          </Text>
        </Tab>
      </TabLink>
    );

    const headers = [energy, milestone, milestone];
    for (let i = 0; i < headers.length; i++) {
      if ((headerOn == 0 && !isPhone) || openMenu) {
        setCollapsed(false);
        return;
      } else return headers[headerOn - 1];
    }
  };

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -150) {
      setScrolled(true);
    } else {
      setScrolled(false);
      setHeader(0);
    }
    if (!openMenu) {
      if (
        currPos.y < props.heights.energy + 200 &&
        currPos.y > props.heights.milestone + 200
      ) {
        setCollapsed(true);
        setHeader(1);
      } else if (currPos.y < props.heights.milestone + 100) {
        setCollapsed(true);
        setHeader(2);
      }
    }
  });

  return (
    <Wrapper scrolled={scrolled} collapsed={collapsed}>
      {console.log(headerOn)}
      <HomeLink onClick={() => handleHeaderChange(0)} to="/#top">
        <LogoFrame>
          <Logo src="logo180.png" />
        </LogoFrame>
      </HomeLink>
      {collapsed ? (
        [
          headerSelected(),
          <HeaderToggle onClick={() => toggleMenu()}>
            <Hamburger src={require('./svg/hamburger.svg')} />
          </HeaderToggle>
        ]
      ) : (
        <Nav collapsed={collapsed} scrolled={scrolled}>
          <TabLink
            scrolled={scrolled}
            onClick={() => handleHeaderChange(1)}
            to="/#energy"
          >
            <Tab>
              <Text header color={'#e6ffff'}>
                Energy
              </Text>
            </Tab>
          </TabLink>
          <TabLink
            scrolled={scrolled}
            onClick={() => handleHeaderChange(2)}
            to="/#roadmap"
          >
            <Tab>
              <Text header color={'#e6ffff'}>
                Road Map
              </Text>
            </Tab>
          </TabLink>
          <TabLink
            scrolled={scrolled}
            onClick={() => handleHeaderChange(3)}
            to=""
          >
            <Tab>
              <Text header color={'#e6ffff'}>
                About
              </Text>
            </Tab>
          </TabLink>
        </Nav>
      )}
    </Wrapper>
  );
}

export default Header;
