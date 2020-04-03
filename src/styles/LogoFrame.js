import React from 'react';
import styled, { css } from 'styled-components';

const LogoFrame = styled.div`
  pointer-events: auto;
  transition: all 0.2s ease-in-out;
  top: 0;
  display: flex;
  align-items: center;
  height: 170%;
  width: 10vw;
  max-width: 6rem;

  justify-content: center;
  border-radius: 0px 0px 10px 10px;
  z-index: 100;
  backdrop-filter: blur(20px);

  &:hover {
    height: 200%;
  }
  @media (max-width: 768px) {
    width: 15vw;
    height: 135%;
  }
`;

export default LogoFrame;
