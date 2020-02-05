import styled, { css } from 'styled-components';
const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  flex: 1;
  padding-left: 1em;
  padding-right: 1em;
  height: 100%;
  min-width: 50px;
  margin: 0 -1em;
  ${props =>
    props.scrolled &&
    css`
      margin-top: -1rem 0px;
    `}
  &:hover {
    transform: scale(1.1);
  }
`;

export default Tab;
