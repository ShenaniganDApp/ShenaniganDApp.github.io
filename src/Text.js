import React from "react";
import styled from "styled-components";


function Text(props) {

  const TextItem = styled.p`
    text-decoration: none;
    color: ${props.color};
    -webkit-text-stroke: 1px #ff006c;
    font-weight: 200;
    font-size: ${props.fontSize};
    font-family: ${props.fontFamily};
    margin:0;
    padding:0;
  `;
  return <TextItem>{props.content}</TextItem>;
 
}

export default Text;
