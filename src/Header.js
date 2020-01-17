import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Text from "./styles/Text";
import { HashLink as Link } from "react-router-hash-link";

const Wrapper = styled.div`
  display: flex;
  height:5vw
  justify-content: ${props =>
    props.collapsed ? "space-between" : " flex-start"};
  min-height:3rem
  top:0;
  position:sticky;
  `;

const Logo = styled.img`
  display: block
  width: auto;
  height: 90%;
  max-width: 90%;
`;
const Nav = styled.div`
  transition: all 0.2s ease-in-out;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Frame = styled.div`
  transition: all .2s ease-in-out;
  top: 0;
  display: flex;
  align-items: center;
  height:100%
  width: 10vw;
  margin-left: 1%;
  background:linear-gradient(#ff006c, #ff4);
  justify-content: center;

  &:hover {
    height:150%
  }
`;

const ButtonLine = styled.div`
  border-left: 1px solid rgb(256, 256, 256);
  height: 100%;
  transition: all 0.2s ease-in-out;
`;

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

  ${props => props.collapsed && !props.selected}

  &:hover {
    background-color: rgba(256, 256, 256, 0.7);
    height: 150%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 100%;
`;

const MenuToggle = styled.div`
  transition: all .2s ease-in-out;
  top: 0;
  right:0;
  display: flex;
  height:100%
  width: 10vw;
  margin-right: 1%;
  background:linear-gradient(#ff006c, #ff4);

  &:hover {
    width:150%
  }
`;

const CollapsableWrapper = styled.div`
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 100%;
  display: flex;
  ${props =>
    props.collapsed &&
    css`
    max-width:0px;
    overflow:hidden:`}
`;

function Header() {
  const [headerOn, setHeader] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const handleHeaderChange = selection => {
    if (!collapsed) {
      setCollapsed(true);
    }

    if (selection == 0) {
      setCollapsed(false);
    }

    setHeader(selection);
  };

  const headerSelected = () => {
    const home = (
      <StyledLink onClick={() => handleHeaderChange(0)} to="/#top">
        <Tab>
          <Text header color={"#e6ffff"}>
            Home
          </Text>
        </Tab>
      </StyledLink>
    );
    const contact = (
      <StyledLink onClick={() => handleHeaderChange(1)} to="/#contact">
        <Tab>
          <Text header color={"#e6ffff"}>
            Contact
          </Text>
        </Tab>
      </StyledLink>
    );
    const about = (
      <StyledLink onClick={() => handleHeaderChange(2)} to="/#about">
        <Tab>
          <Text header color={"#e6ffff"}>
            About
          </Text>
        </Tab>
      </StyledLink>
    );

    const headers = [home, contact, about];
    for (let i = 0; i < headers.length; i++) {
      if (headerOn == 0) {
        return [home, contact, about];
      } else return headers[headerOn];
    }
  };
  return (
    <Wrapper collapsed={collapsed}>
      <Link onClick={() => handleHeaderChange(0)} to="/#top">
        <Frame>
          <Logo src="logo180.png" />
        </Frame>
      </Link>
      <Nav>
        {collapsed ? (
          [
            headerSelected(),
            <MenuToggle onClick={() => handleHeaderChange(0)} />
          ]
        ) : (
          <CollapsableWrapper collapsed={collapsed}>
            {headerSelected()}
          </CollapsableWrapper>
        )}
      </Nav>
    </Wrapper>
  );
}

export default Header;
