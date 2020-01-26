import React from "react";
import styled, { css } from "styled-components";

const HeaderToggle = styled.div`
  transition: all 0.2s ease-in-out;
  top: 0;
  right: 0;
  display: flex;
  height: 100%;
  width: 7vw;
  background: radial-gradient(circle at 30% 107%, #ff4 0%, #ff006c 90%);
  background-image: url(${require('../svg/hamburger.svg')});
  background-image: url(${require('../svg/hamburger.svg')}),
    radial-gradient(circle at 30% 107%, #ff4 0%, #ff006c 90%);
  background-repeat: no-repeat;
  background-position: center;
  background-color: #e6ffff;

  border-radius: 0px 0px 30px 0px;
  &:hover {
    width: 9vw;
  }
`;

export default HeaderToggle;