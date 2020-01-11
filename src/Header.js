import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background: #595959;
    margin:0;
    padding:1rem;
    width: 100%;
    display: inline-block;
`;
const Logo = styled.img`
`;
const Tab = styled.div`
    color:#e6ffff;
    padding: 0.5 rem
    text-align: center;
    font-size: 1rem
    font-family: 'Roboto', sans-serif;
`;

function Header() {
  return (
    <Wrapper>
      <Logo src=""/>
      <Tab>Home</Tab>
      <Tab>Contact</Tab>
      <Tab>About</Tab>
    </Wrapper>
  );
}

export default Header;
