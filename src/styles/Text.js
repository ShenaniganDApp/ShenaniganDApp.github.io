import React from "react";
import styled, { css } from "styled-components";

const Text = styled.p`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: ${props => props.color};
  ${props =>
    (props.header &&
      css`
        font-weight: 800;
        font-size: 2.5vw;
        font-family: Roboto, sans-serif;
        -webkit-user-select: none; /* Chrome all / Safari all */
        -moz-user-select: none; /* Firefox all */
        -ms-user-select: none; /* IE 10+ */
        user-select: none;
        @media (max-width: 768px) {
          font-size: 3.5vw;
        }
      `) ||
    (props.main &&
      css`
        font-size: 12px;
        font-size: 1.5vw;
        font-family: "Roboto", sans-serif;
      `) ||
    (props.title &&
      css`
        font-size: 20px;
        font-size: 2.5vw;
        font-family: "Roboto", sans-serif;
      `)};
`;

export default Text;
