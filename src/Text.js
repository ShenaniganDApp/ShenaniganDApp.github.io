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
    margin:0;
    padding:0;
    min-height:80%;
  `;
  return <TextItem>{props.content}</TextItem>;
 
}

export default Text;
