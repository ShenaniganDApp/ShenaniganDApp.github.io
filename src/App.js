import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color:#e6ffff; 
  text-align:center; 
  padding:70px 0; 
  -webkit-text-stroke: 3px #ff006c; 
  font-size:200px; 
  font-family: 'Roboto', sans-serif; 
  font-weight: 900;"
`;
const Header = styled.header``;
const Background = styled.div`
  bgcolor: black;
`;

function App() {
  return (
    <Background clas
    sName="App">
      <Header></Header>
      <Title> SHE </Title>
    </Background>
  );
}

export default App;
