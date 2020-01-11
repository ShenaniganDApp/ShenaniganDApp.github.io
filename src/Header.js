import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height:5vw
  justify-content: flex-start
  `;

const Logo = styled.img``;
const Nav = styled.div`
  margin: 0;
  height: 5vw;
  display: flex;
  justify-content: space-evenly;
  width:100%
  &:last-child {
    border-right: none;
  }
`;

const Frame = styled.div`
  top: 0;
  height:100%
  width: 10%;
  margin-left: 3%;
  background-color: #ff006c;
`;

const Tab = styled.div`
  flex: 1;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  border-right: 1px solid #a29f9fd4
`;

const Text = styled.p`
  text-decoration: none;
  color: #e6ffff;
  -webkit-text-stroke: 1px #ff006c;
  font-weight: 200;
  text-align: center;
  font-size: 5vw;
  font-family: "Roboto", sans-serif;
  margin:0;
  padding:0;
`;

function Header() {
  return (
    <Wrapper>
      <Frame>
        <Logo src="images/logo180.png" />
      </Frame>
      <Nav>
        <Tab>
          <Text>Home</Text>
        </Tab>
        <Tab>
          <Text>Contact</Text>
        </Tab>
        <Tab>
          <Text>About</Text>
        </Tab>
      </Nav>
    </Wrapper>
  );
}

export default Header;
