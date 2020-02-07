import React from 'react';
import { Text, Tab } from '../styles';
import { HashLink as Link } from 'react-router-hash-link';
import styled, { css } from 'styled-components';
import { Transition } from 'react-transition-group';

const TabLink = styled(Link)`
  transition: width .7s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  text-decoration: none;
  height: 100%;
  width: 100%;
  min-width: 5rem;
  overflow: hidden;
  ${props =>
    props.selected &&
    css`
      backdrop-filter: blur(20px);
      background: rgba(0, 0, 0, 0.8);
      width: 25%;
      margin-left: auto;
      border-radius: 0px 0px 0px 30px;
      max-width: 15rem;
    `}

  ${props =>
    !props.selected &&
    props.collapsed &&
    css`
      min-width: 0;
      width: ${({ state }) =>
        state === 'entering' || state === 'entered' ? 100 : 0}%;
    `}
`;

const HeaderTab = props => (
  <TabLink
    collapsed={props.collapsed}
    selected={props.selected}
    to={props.to}
    onClick={() => props.handleHeaderChange(props.num)}
  >
    <Tab scrolled={props.scrolled}>
      <Text header color={'#e6ffff'}>
        {props.text}
      </Text>
    </Tab>
  </TabLink>
);

export default HeaderTab;
