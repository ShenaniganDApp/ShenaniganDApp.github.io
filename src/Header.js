import React, { useState, useEffect } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import styled, { css } from 'styled-components';
import { HeaderToggle, LogoFrame } from './styles';
import { HashLink as Link } from 'react-router-hash-link';
import { Transition, TransitionGroup } from 'react-transition-group';
import { HeaderTab } from './components';

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
  height: 90%;
`;
const Nav = styled.div`
  transition: backdrop-filter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s,
    background 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  margin: 0 0 0 -1rem;
  border-bottom-left-radius: 30px;
  width: 100%;
  ${props =>
    props.scrolled &&
    css`
      backdrop-filter: blur(20px);
      background: rgba(0, 0, 0, 0.8);
    `}
`;
const CollapsedNav = styled.div`
  display: flex;
  height: 100%;
  margin-left: auto;
  width: auto;
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
  const [collapsedStart, setCollapsedStart] = useState(false);
  const [collapsedDone, setCollapsedDone] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  const isPhone = window.innerWidth <= 768;
  const pagePositionTop = window.pageYOffset < 150;
  useEffect(() => {
    if (isPhone && pagePositionTop) {
      setCollapsedStart(true);
      setHeader(0);
    }
  }, [isPhone, pagePositionTop]);

  const handleHeaderChange = selection => {
    setHeader(selection);
    if (!collapsedDone && selection !== 0) {
      setCollapsedStart(true);
    }
    setHeaderToggle(false);
  };

  const toggleHeader = () => {
    setCollapsedStart(false);
    setCollapsedDone(false);
    setHeaderToggle(true);
  };

  const headerCollapsed = () => {
    const Home = (
      <HeaderTab
        scrolled={scrolled}
        selected
        num={0}
        handleHeaderChange={handleHeaderChange}
        to=""
        text={'ShenanIgan'}
      />
    );
    const Energy = (
      <HeaderTab
        scrolled={scrolled}
        selected
        handleHeaderChange={handleHeaderChange}
        to="/#energy"
        num={1}
        text={'Energy'}
      />
    );
    const Milestone = (
      <HeaderTab
        scrolled={scrolled}
        selected
        num={2}
        handleHeaderChange={handleHeaderChange}
        to="/#roadmap"
        text={'Road Map'}
      />
    );
    const Team = (
      <HeaderTab
        scrolled={scrolled}
        selected
        num={3}
        handleHeaderChange={handleHeaderChange}
        to=""
        text={'Team'}
      />
    );

    const headers = [Home, Energy, Milestone, Team];
    if (collapsedDone) {
      return headers[headerOn];
    } else {
      return null;
    }
  };

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -150) {
      setScrolled(true);
    } else if (isPhone) {
      setCollapsedStart(true);
      setHeader(0);
    } else {
      if (headerOn !== 0) {
        setScrolled(false);
        setHeader(0);
        setCollapsedStart(false);
        setCollapsedDone(false);
      }
    }
    if (!headerToggle) {
      if (
        currPos.y < props.heights.energy + 200 &&
        currPos.y > props.heights.milestone + 200
      ) {
        setCollapsedStart(true);
        setHeader(1);
      } else if (currPos.y < props.heights.milestone + 100) {
        setCollapsedStart(true);
        setHeader(2);
      }
    }
  });

  return (
    <Wrapper scrolled={scrolled} collapsed={collapsedStart}>
      <HomeLink onClick={() => handleHeaderChange(0)} to="/#top">
        <LogoFrame>
          <Logo src={require('./images/logo_Filled.png')} />
        </LogoFrame>
      </HomeLink>
      {headerCollapsed()}

      <Transition
        in={!collapsedStart}
        timeout={700}
        onExited={() => {
          setCollapsedDone(true);
        }}
        unmountOnExit
        mountOnEnter
      >
        {state => (
          <Nav state={state} scrolled={scrolled}>
            <HeaderTab
              state={state}
              collapsed={collapsedStart}
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to="/#energy"
              num={1}
              text={'Energy'}
            />
            <HeaderTab
              state={state}
              collapsed={collapsedStart}
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to="/#roadmap"
              num={2}
              text={'Road Map'}
            />
            <HeaderTab
              state={state}
              collapsed={collapsedStart}
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to=""
              num={3}
              text={'Team'}
            />
          </Nav>
        )}
      </Transition>
      <Transition in={collapsedDone} timeout={500}>
        {state => (
          <HeaderToggle
            state={state}
            collapsed={collapsedDone}
            onClick={() => toggleHeader()}
          >
            <Hamburger src={require('./svg/hamburger.svg')} />
          </HeaderToggle>
        )}
      </Transition>
    </Wrapper>
  );
}

export default Header;
