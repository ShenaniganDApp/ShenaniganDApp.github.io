import styled, { css } from 'styled-components';

const HeaderToggle = styled.div`
  transition: all 0.5s ease-in-out;
  top: 0;
  right: 0;

  max-width: 7vw;
  background: radial-gradient(circle at 30% 107%, #ff4 0%, #ff006c 90%);
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 30px 0px;
  min-width: 2rem;
  z-index: 100;
  display: flex;
  height: ${({ state }) =>
    state === 'entering' || state === 'entered' ? 100 : 0}%;
  ${props =>
    !props.collapsed &&
    css`
      min-width: 0;
      width: 0;
    `}

  &:hover {
    max-width: 9vw;
  }
  @media (max-width: 768px) {
    border-radius: 0px 0px 15px 0px;
  }
`;

export default HeaderToggle;
