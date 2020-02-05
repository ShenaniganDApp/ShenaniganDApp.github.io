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
    background 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s, width 1s;
  z-index: 1;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 0 0 -1rem;

  width: ${({ state }) =>
    state === 'entering' || state === 'entered' ? 100 : 0}%;

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
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedDone, setCollapsedDone] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  const isPhone = window.innerWidth <= 768;
  useEffect(() => {
    console.log(collapsedDone);
    console.log(collapsed);
    if (headerOn === 0 && !isPhone) {
      setCollapsed(false);
    }
    if (isPhone) {
      setCollapsed(true);
    }
  }, [scrolled, headerOn, isPhone]);

  const handleHeaderChange = selection => {
    setHeader(selection);
    if (!collapsed && selection !== 0) {
      setCollapsed(true);
    }
    setHeaderToggle(false);
  };

  const toggleHeader = () => {
    setCollapsed(false);
    setHeaderToggle(true);
  };

  const headerCollapsed = () => {
    const Home = (
      <Transition key={'home'} timeout={{ enter: 1000, exit: 1000 }}>
        <HeaderTab
          scrolled={scrolled}
          selected
          num={0}
          handleHeaderChange={handleHeaderChange}
          to=""
          text={'ShenanIgan'}
        />
      </Transition>
    );
    const Energy = (
      <Transition key={'energy'} timeout={{ enter: 1000, exit: 1000 }}>
        <HeaderTab
          scrolled={scrolled}
          selected
          handleHeaderChange={handleHeaderChange}
          to="/#energy"
          num={1}
          text={'Energy'}
        />
      </Transition>
    );
    const Milestone = (
      <Transition key={'milestone'} timeout={{ enter: 1000, exit: 1000 }}>
        <HeaderTab
          scrolled={scrolled}
          selected
          num={2}
          handleHeaderChange={handleHeaderChange}
          to="/#roadmap"
          text={'Road Map'}
        />
      </Transition>
    );
    const Team = (
      <Transition key={'about'} timeout={{ enter: 1000, exit: 1000 }}>
        <HeaderTab
          scrolled={scrolled}
          selected
          num={3}
          handleHeaderChange={handleHeaderChange}
          to=""
          text={'Team'}
        />
      </Transition>
    );

    const headerToggle = (
      <Transition key={'toggle'} timeout={{ enter: 1000, exit: 1000 }}>
        {state => (
          <HeaderToggle state={state} onClick={() => toggleHeader()}>
            <Hamburger src={require('./svg/hamburger.svg')} />
          </HeaderToggle>
        )}
      </Transition>
    );

    const headers = [Home, Energy, Milestone, Team];
    if (collapsedDone) {
      return [headers[headerOn], headerToggle];
    } else {
      return null;
    }
  };

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -150) {
      setScrolled(true);
    } else {
      if (headerOn !== 0 && !isPhone) {
        setScrolled(false);
        setHeader(0);
      }
    }
    if (!headerToggle) {
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
      <HomeLink onClick={() => handleHeaderChange(0)} to="/#top">
        <LogoFrame>
          <Logo src={require('./images/logo_Filled.png')} />
        </LogoFrame>
      </HomeLink>
      <TransitionGroup component={null}>{headerCollapsed()}</TransitionGroup>
      <Transition
        in={!collapsed}
        timeout={{ exit: 1000 }}
        onExited={() => setCollapsedDone(true)}
       
        onEnter={() => setCollapsedDone(false)}
      >
        {state => (
          <Nav state={state} collapsed={collapsed} scrolled={scrolled}>
            <HeaderTab
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to="/#energy"
              num={1}
              text={'Energy'}
            />
            <HeaderTab
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              
              to="/#roadmap"
              num={2}
              text={'Road Map'}
            />
            <HeaderTab
              scrolled={scrolled}
              handleHeaderChange={handleHeaderChange}
              to=""
              num={3}
              text={'Team'}
            />
          </Nav>
        )}
      </Transition>
    </Wrapper>
  );
}

export default Header;
