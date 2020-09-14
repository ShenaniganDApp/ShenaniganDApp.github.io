import React, { useState, useEffect } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import styled, { css } from 'styled-components';
import { HeaderToggle, LogoFrame } from './styles';
import { HashLink as Link } from 'react-router-hash-link';
import { Transition } from 'react-transition-group';
import { HeaderTab } from './components';

const Wrapper = styled.div`
  display: flex;
  height: 5vw;
  min-height: 3rem;
  max-height: 4rem;
  position: sticky;
  z-index: 100;
  top: 0;
  justify-content: ${(props) =>
    props.collapsed ? 'space-between' : ' flex-start'};
  pointer-events: none;
`;

const Logo = styled.img`
  width: auto;
  height: 100%;
`;
const Nav = styled.div`
  transition: backdrop-filter 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s,
    background 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s, opacity 0.75s;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  margin: 0 0 0 -1rem;
  border-bottom-left-radius: 15px;
  width: 100%;
  opacity: ${({ state }) =>
    state === 'entering' || state === 'entered' ? 1 : 0};
  ${(props) =>
    props.scrolled &&
    css`
      backdrop-filter: blur(20px);
      background: rgba(0, 0, 0, 0.8);
    `}
`;
// const CollapsedNav = styled.div`
//   display: flex;
//   height: 100%;
//   margin-left: auto;
//   width: auto;
// `;

const HomeLink = styled(Link)`
  z-index: 100;
  margin-left: 2%;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Hamburger = styled.img`
  width: auto;
  height: 80%;
  max-width: 80%;
`;

function Header(props) {
  const [headerOn, setHeader] = useState();
  const [collapsedStart, setCollapsedStart] = useState(false);
  const [collapsedEnd, setCollapsedEnd] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerLock, setHeaderToggle] = useState(false);
  const isPhone = window.innerWidth <= 768;
  const pagePositionTop = window.pageYOffset < 150;
  useEffect(() => {
    if (isPhone && pagePositionTop) {
      setCollapsedStart(true);
      setHeader(0);
    }
  }, [isPhone, pagePositionTop]);

  const handleHeaderChange = (selection) => {
    setHeader(selection);
    if (!collapsedEnd && selection !== 0) {
      setCollapsedStart(true);
    }
    setHeaderToggle(false);
  };

  const handleHeaderToggle = () => {
    setCollapsedStart(false);
    setCollapsedEnd(false);
    setHeaderToggle(true);
  };

  const headerCollapsed = () => {
    const Home = (
      <HeaderTab
        scrolled={scrolled}
        selected
        num={0}
        handleHeaderToggle={handleHeaderToggle}
        to="/home/#top"
        text={'ShenanIgan'}
      />
    );
    const Energy = (
      <HeaderTab
        scrolled={scrolled}
        selected
        handleHeaderToggle={handleHeaderToggle}
        to="/home/#energy"
        num={1}
        text={'Learn'}
      />
    );
    const Milestone = (
      <HeaderTab
        scrolled={scrolled}
        selected
        num={2}
        handleHeaderToggle={handleHeaderToggle}
        to="/home/#roadmap"
        text={'Roadmap'}
      />
    );
    const Team = (
      <HeaderTab
        scrolled={scrolled}
        selected
        num={3}
        handleHeaderToggle={handleHeaderToggle}
        to="/home/#team"
        text={'Team'}
      />
    );
    const Contact = (
      <HeaderTab
        scrolled={scrolled}
        selected
        num={4}
        handleHeaderToggle={handleHeaderToggle}
        to="/home/#contact"
        text={'Contact'}
      />
    );

    const headers = [Home, Energy, Milestone, Team, Contact];
    if (collapsedEnd) {
      return headers[headerOn];
    } else {
      return null;
    }
  };

  useScrollPosition(({ prevPos, currPos }) => {

    if (currPos.y < -150) {
      setScrolled(true);
    } else if (isPhone) {
      if (!headerLock) {
        setCollapsedStart(true);
        setHeader(0);
      }
    } else {
      if (headerOn !== 0) {
        setScrolled(false);
        setHeader(0);
        setCollapsedStart(false);
        setCollapsedEnd(false);
      }
    }
    if (!headerLock) {
      if (
        currPos.y <= props.heights.energy &&
        currPos.y > props.heights.milestone
      ) {
        setCollapsedStart(true);
        setHeader(1);
      } else if (
        currPos.y <= props.heights.milestone &&
        currPos.y > props.heights.team
      ) {
        setCollapsedStart(true);
        setHeader(2);
      } else if (
        currPos.y <= props.heights.team &&
        currPos.y > props.heights.contact
      ) {
        setCollapsedStart(true);
        setHeader(3);
      } else if (currPos.y <= props.heights.contact) {
        setCollapsedStart(true);
        setHeader(4);
      }
    }
  });

  return (
    <Wrapper scrolled={scrolled} collapsed={collapsedStart}>
      <HomeLink onClick={() => handleHeaderChange(0)} to="/home/#top">
        <LogoFrame>
          <Logo src={require('./images/SHELogo_Final.png')} />
        </LogoFrame>
      </HomeLink>
      {headerCollapsed()}

      <Transition
        in={!collapsedStart}
        timeout={700}
        onExited={() => {
          setCollapsedEnd(true);
        }}
        unmountOnExit
        mountOnEnter
      >
        {(state) => (
          <Nav state={state} scrolled={scrolled}>
            <HeaderTab
              state={state}
              collapsed={collapsedStart}
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to="/home/#energy"
              num={1}
              text={'Learn'}
            />
            <HeaderTab
              state={state}
              collapsed={collapsedStart}
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to="/home/#roadmap"
              num={2}
              text={'Roadmap'}
            />
            <HeaderTab
              state={state}
              collapsed={collapsedStart}
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to="/home/#team"
              num={3}
              text={'Team'}
            />
            <HeaderTab
              state={state}
              collapsed={collapsedStart}
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to="/home/#contact"
              num={4}
              text={'Contact'}
            />
          </Nav>
        )}
      </Transition>
      <Transition in={collapsedEnd} timeout={500}>
        {(state) => (
          <HeaderToggle
            state={state}
            collapsed={collapsedEnd}
            onClick={() => handleHeaderToggle()}
          >
            <Hamburger src={require('./svg/hamburger.svg')} />
          </HeaderToggle>
        )}
      </Transition>
    </Wrapper>
  );
}

export default Header;
