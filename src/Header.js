import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Wrapper = styled.div`
  display: flex;
  height:5vw
  justify-content: flex-start
  min-height:3rem
  `;

const Logo = styled.img`
  display: block
  width: auto;
  height: 90%;
  max-width: 90%;
`;
const Nav = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width:100% ;
  
  &:last-child {
    border: none;
  }3
`;

const Frame = styled.div`
  transition: all .2s ease-in-out;
  top: 0;
  display: flex;
  align-items: center;
  height:100%
  width: 10vw;
  margin-left: 1%;
  background-color: #ff006c;
  justify-content: center;

  &:hover {
    height:150%
  }
`;

const ButtonLine = styled.div`
  border-left:1px solid rgb(256,256,256);
  height:100%;
  transition: all .2s ease-in-out;
`

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in-out;
  flex: 1;
  padding-left: 1em;
  padding-right: 1em;
  height: 100%;
  min-width: 50px;

  &:hover {
    background-color: rgba(256,256,256,0.7);
    height:150%
  }

`;

function Header() {
  return (
    <Wrapper>
      <Frame>
        <Logo src="logo180.png" />
      </Frame>
      <Nav>
        <Tab>
          <Text
            content={"Home"}
            color={"#e6ffff"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"5vw"}
          ></Text>
        </Tab>
        <ButtonLine/>
        <Tab>
          <Text
            content={"Contact"}
            color={"#e6ffff"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"5vw"}
          ></Text>
        </Tab>
        <ButtonLine/>
        <Tab>
          <Text
            content={"About"}
            color={"#e6ffff"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"5vw"}
          >
            About
          </Text>
        </Tab>
      </Nav>
    </Wrapper>
  );
}

export default Header;
