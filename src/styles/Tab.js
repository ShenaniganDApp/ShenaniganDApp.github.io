import styled, { css } from 'styled-components';
const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  padding-left: 1em;
  padding-right: 1em;
  height: 100%;
  min-width: 0.5rem;
  margin: 0 -1em;
  ${props =>
    props.scrolled &&
    css`
      margin-top: -1rem 0px;
    `}
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    padding-left: 1em;
    padding-right: 0.5em;
  }
`;

export default Tab;
