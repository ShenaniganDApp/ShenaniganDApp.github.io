import React from "react";
import styled from "styled-components";

function Text(props) {
  const TextItem = styled.p`
    text-decoration: none;
    color: ${props.color};
    -webkit-text-stroke: 1px #ff006c;
    font-weight: 400;
    font-size: ${props.fontSize};
    font-family: ${props.fontFamily};
    margin: 0;
    padding: 0;
    min-height: 80%;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;

    @media (max-width: 768px) {
      -webkit-text-stroke: 0.5px #ff006c;
    }
  `;
  return <TextItem>{props.content}</TextItem>;
}

export default Text;
