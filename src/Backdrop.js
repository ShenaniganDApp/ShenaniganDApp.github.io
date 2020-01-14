import React from "react";
import styled from "styled-components";


const Backdrop = styled.div`
    background-image: url(${props => props.img});
    background-attachment: fixed;
    background-size: cover;
    background-color: ${props => props.backgroundColor};
    background:  linear-gradient(${props => props.linearGradient});
    width: 100%;
    height: 100%;
`;

export default Backdrop;