import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #595959;
  margin: 0;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Logo = styled.img``;
const Tab = styled.div`
  margin: 0 1.5rem;
  text-align: center;
`;

const Text = styled.div`
  color: #e6ffff;
  text-align: center;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;



function Header() {
  return (
    <Wrapper>
      <Logo src="./images/logo180.png" />
      <Tab>
        <Text>Home</Text>
      </Tab>
      <Tab>
        <Text>Contact</Text>
      </Tab>
      <Tab>
        <Text>About</Text>
      </Tab>
    </Wrapper>
  );
}

export default Header;
