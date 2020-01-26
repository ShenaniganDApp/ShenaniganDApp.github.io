import React, { useState, useEffect, useRef } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import styled, { css, keyframes } from 'styled-components';
import { Text, HeaderToggle, LogoFrame } from './styles';
import { HashLink as Link } from 'react-router-hash-link';

const Wrapper = styled.div`
  display: flex;
  height: 5vw;
  min-height: 3rem;
  position: sticky;
  z-index: 100;
  top: 0;
  justify-content: ${props =>
    props.collapsed ? 'space-between' : ' flex-start'};
`;

const Logo = styled.img`
  display: block;
  width: auto;
  height: 90%;
  max-width: 90%;
`;
const Nav = styled.div`
  transition: backdrop-filter background 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  z-index: 1;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 0;
  overflow: hidden;
  ${props =>
    props.scrolled &&
    css`
      backdrop-filter: blur(20px);
      background: rgba(0, 0, 0, 0.8);
    `}
  ${props =>
    !props.collapsed &&
    css`
      transition: 1s;
      width: 100%;
      margin-left: -1rem;
    `}
`;

const ButtonLine = styled.div`
  border-left: 1px solid rgb(256, 256, 256);
  height: 100%;
  transition: all 0.2s ease-in-out;
`;

const Tab = styled.div`
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  flex: 1;
  padding-left: 1em;
  padding-right: 1em;
  height: 100%;
  min-width: 50px;

  ${props =>
    props.scrolled &&
    css`
      margin-top: -1rem 0px;
    `}

  &:hover {
    transform: scale(1.1);
  }
`;

const growSelected = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 50%;
  }
`;
const TabLink = styled(Link)`
  transition: 0.3s;
  text-decoration: none;
  height: 100%;
  width: 100%;
  ${props =>
    props.selected &&
    css`
      backdrop-filter: blur(20px);
      background: rgba(0, 0, 0, 0.8);
      ${'' /* animation: ${growSelected} 1s linear; */}
      width:20%;
      margin-left: auto;
      border-radius: 0px 0px 0px 30px;
    `}
`;

const HomeLink = styled(Link)`
  z-index: 100;
`;

function Header(props) {
  const [headerOn, setHeader] = useState();
  const [collapsed, setCollapsed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrolled) {
      setCollapsed(false);
    }
  }, [scrolled, headerOn]);

  const handleHeaderChange = selection => {
    if (!collapsed) {
      setCollapsed(true);
    }

    setHeader(selection);
  };

  const headerSelected = () => {
    const home = (
      <TabLink
        scrolled={scrolled}
        selected
        onClick={() => handleHeaderChange(0)}
        to="/#top"
      >
        <Tab>
          <Text header color={'#e6ffff'}>
            Home
          </Text>
        </Tab>
      </TabLink>
    );
    const contact = (
      <TabLink
        scrolled={scrolled}
        selected
        onClick={() => handleHeaderChange(1)}
        to="/#contact"
      >
        <Tab>
          <Text header color={'#e6ffff'}>
            Contact
          </Text>
        </Tab>
      </TabLink>
    );
    const about = (
      <TabLink
        scrolled={scrolled}
        selected
        onClick={() => handleHeaderChange(2)}
        to="/#about"
      >
        <Tab>
          <Text header color={'#e6ffff'}>
            About
          </Text>
        </Tab>
      </TabLink>
    );

    const headers = [home, contact, about];
    for (let i = 0; i < headers.length; i++) {
      if (headerOn == 0) {
        setCollapsed(false);
        return;
      } else return headers[headerOn];
    }
  };

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    if (currPos.y < props.heights.contact) {
      setCollapsed(true);
      setHeader(1);
    } else if (currPos.y < props.heights.about) {
      setCollapsed(true);
      setHeader(2);
    }
  });

  return (
    <Wrapper scrolled={scrolled} collapsed={collapsed}>
      <HomeLink onClick={() => handleHeaderChange(0)} to="/#top">
        <LogoFrame>
          <Logo src="logo180.png" />
        </LogoFrame>
      </HomeLink>
      {collapsed ? (
        [
          headerSelected(),
          <HeaderToggle onClick={() => handleHeaderChange(0)} />
        ]
      ) : (
        <Nav collapsed={collapsed} scrolled={scrolled}>
          <TabLink
            scrolled={scrolled}
            onClick={() => handleHeaderChange(0)}
            to="/#top"
          >
            <Tab>
              <Text header color={'#e6ffff'}>
                Home
              </Text>
            </Tab>
          </TabLink>
          <TabLink
            scrolled={scrolled}
            onClick={() => handleHeaderChange(1)}
            to="/#contact"
          >
            <Tab>
              <Text header color={'#e6ffff'}>
                Contact
              </Text>
            </Tab>
          </TabLink>
          <TabLink
            scrolled={scrolled}
            onClick={() => handleHeaderChange(2)}
            to="/#about"
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
