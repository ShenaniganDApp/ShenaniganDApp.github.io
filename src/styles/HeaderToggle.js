import React from 'react';
import styled, { css } from 'styled-components';

const HeaderToggle = styled.div`
  transition: all 0.2s ease-in-out;
  top: 0;
  right: 0;
  display: flex;
  height: 100%;
  width: 7vw;
  background: radial-gradient(circle at 30% 107%, #ff4 0%, #ff006c 90%);
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 30px 0px;
  min-width:2rem;
  z-index:100;

  &:hover {
    width: 9vw;
  }
  @media (max-width: 768px) {
    border-radius: 0px 0px 15px 0px;
  }
`;

export default HeaderToggle;
