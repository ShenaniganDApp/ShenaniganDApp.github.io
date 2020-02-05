import React from 'react';
import styled, { css } from 'styled-components';

const HeaderToggle = styled.div`
  transition: all 0.2s ease-in-out;
  top: 0;
  right: 0;
  flex: 1;
  max-width: 7vw;
  background: radial-gradient(circle at 30% 107%, #ff4 0%, #ff006c 90%);
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 30px 0px;
  min-width: 2rem;
  z-index: 100;

  height: ${({ state }) =>
    state === 'entering' || state === 'entered' ? 100 : 0}%;
  display: ${({ state }) =>
    state === 'entering' || state === 'entered' ? 'flex' : 'none'};

  &:hover {
    max-width: 9vw;
  }
  @media (max-width: 768px) {
    border-radius: 0px 0px 15px 0px;
  }
`;

export default HeaderToggle;
