import React from 'react';
import styled, { css } from 'styled-components';

const LogoFrame = styled.div`
  transition: all 0.2s ease-in-out;
  top: 0;
  display: flex;
  align-items: center;
  height: 135%;
  width: 10vw;
  max-width: 6rem;
  /* background: radial-gradient(circle at 30% 107%, #ff4 0%, #ff006c 90%); */
  background-color: black;
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
  z-index: 100;
  /* -webkit-box-shadow: 0px 5px 8px 6px rgba(255, 255, 255, 0.1);
  -moz-box-shadow: 0px 5px 8px 6px rgba(255, 255, 255, 0.1);
  box-shadow: 0px 5px 8px 6px rgba(255, 255, 255, 0.1); */
  &:hover {
    height: 170%;
  }
  @media (max-width: 768px) {
    width: 12vw;
  }
`;

export default LogoFrame;
