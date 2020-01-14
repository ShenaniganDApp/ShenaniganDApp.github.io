import React from "react";
import styled from "styled-components";

const Text = styled.p`
text-decoration: none;
color: ${props => props.color};
font-weight: 800;
font-size: ${props =>props.fontSize};
font-family: ${props => props.fontFamily};
margin: 0;
padding: 0;
min-height: 80%;
-webkit-user-select: none; /* Chrome all / Safari all */
-moz-user-select: none; /* Firefox all */
-ms-user-select: none; /* IE 10+ */
user-select: none;

@media (max-width: 768px) {
  font-size: 5vw;
}
`;


export default Text;