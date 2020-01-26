import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  background-color: ${props => props.backgroundColor};
  background: ${props => props.background};
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default Backdrop;
