import styled, { css } from 'styled-components';

const MapFruit = styled.img`
  transition: 0.3s;
  width: 5%;
  position: absolute;
  &:hover {
    transform: scale(1.2);
    -webkit-filter: drop-shadow(0px 0px 5px #e6ffff);
  }
  @media (max-width: 768px) {
    width: 8%;
  }
`;
export default MapFruit;
