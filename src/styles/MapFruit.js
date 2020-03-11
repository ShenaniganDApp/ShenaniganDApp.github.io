import styled, { css } from 'styled-components';

const MapFruit = styled.img`
  transition: 0.3s;
  width: 7%;
  position: absolute;
  &:hover {
    transform: scale(1.2);
    -webkit-filter: drop-shadow(0px 0px 5px #e6ffff);
  }
`;
export default MapFruit;
