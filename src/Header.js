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
  height: 80%;
  max-width: 80%;
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
    if (!scrolled && headerOn === 0 && !isPhone) {
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
    const Energy = (
      <Transition
        key={'energy'}
        in={collapsed && headerOn == 1}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <HeaderTab
          scrolled={scrolled}
          selected
          onClick={() => handleHeaderChange(1)}
          to="/#energy"
          text={'Energy'}
        />
      </Transition>
    );
    const Milestone = (
      <Transition
        key={'milestone'}
        in={collapsed && headerOn == 2}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <HeaderTab
          scrolled={scrolled}
          selected
          onClick={() => handleHeaderChange(2)}
          to="/#roadmap"
          text={'Road Map'}
        />
      </Transition>
    );
    const About = (
      <Transition
        key={'about'}
        in={collapsed && headerOn == 3}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <HeaderTab
          scrolled={scrolled}
          selected
          onClick={() => handleHeaderChange(3)}
          to=""
          key={'about'}
          text={'About'}
        />
      </Transition>
    );

    const HeaderToggleButton = (
      <Transition
        key={'toggle'}
        in={collapsed}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <HeaderToggle onClick={() => toggleMenu()}>
          <Hamburger src={require('./svg/hamburger.svg')} />
        </HeaderToggle>{' '}
      </Transition>
    );

    const headers = [Energy, Milestone, About];
    for (let i = 0; i < headers.length; i++) {
      if ((headerOn === 0 && !isPhone) || openMenu) {
        setCollapsed(false);
        return;
      } else return [headers[headerOn - 1], HeaderToggleButton];
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
      <HomeLink onClick={() => handleHeaderChange(0)} to="/#top">
        <LogoFrame>
          <Logo src="logo180.png" />
        </LogoFrame>
      </HomeLink>
      <TransitionGroup component={null}>{headerSelected()}</TransitionGroup>
      <Transition
        in={!collapsed}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {state => (
          <Nav
            state={state}
            collapsed={collapsed}
            scrolled={scrolled}
            key="nav"
          >
            {console.log(state)}
            <HeaderTab
              scrolled={scrolled}
              onClick={() => handleHeaderChange(1)}
              to="/#energy"
              key="energy"
              text={'Energy'}
            />
            <HeaderTab
              scrolled={scrolled}
              onClick={() => handleHeaderChange(2)}
              to="/#roadmap"
              key="milestone"
              text={'Road Map'}
            />
            <HeaderTab
              scrolled={scrolled}
              onClick={() => handleHeaderChange(3)}
              to=""
              key="about"
              text={'About'}
            />
          </Nav>
        )}
      </Transition>
    </Wrapper>
  );
}

export default Header;
