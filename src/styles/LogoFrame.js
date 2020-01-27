import React from "react";
import styled, { css } from "styled-components";

const LogoFrame = styled.div`
  transition: all 0.2s ease-in-out;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 10vw;
  max-width: 7rem;
  background: radial-gradient(circle at 30% 107%, #ff4 0%, #ff006c 90%);
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
  z-index:100;

  &:hover {
    height: 150%;
  }
  @media (max-width: 768px) {
          width: 20vw;
        }
`;

export default LogoFrame;