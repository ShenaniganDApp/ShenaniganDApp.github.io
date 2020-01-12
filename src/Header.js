import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height:5vw
  justify-content: flex-start
  min-height:3rem
  `;

const Logo = styled.img` 
  display: block;
  max-width:230px;
  max-height:95px;
  width: auto;
  height:90%

`;
const Nav = styled.div`
  margin: 0;;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width:100%
  &:last-child {
    border-right: none;
  }
`;

const Frame = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  height:100%
  width: 10vw;
  margin-left: 1%;
  background-color: #ff006c;
  justify-content: center;
`;

const Tab = styled.div`
  flex: 1;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  height:100%;

  min-width: 50px;
  border-right: 1px solid #a29f9fd4
`;

//calc in font size hacks min font size 
const Text = styled.p`
  text-decoration: none;
  color: #e6ffff;
  -webkit-text-stroke: 1px #ff006c;
  font-weight: 200;
  text-align: center;
  font-size: 5vw
  font-family: "Roboto", sans-serif;
  margin:0;
  padding:0;
`;

function Header() {
  return (
    <Wrapper>
      <Frame>
        <Logo src="logo180.png" />
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
