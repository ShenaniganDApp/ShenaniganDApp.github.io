import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import Slide from "./Slide";

const AppWrapper = styled.div`
`;
function App() {
  return (
    <AppWrapper>
      <Header />
      <Home />
      <Slide/>
      <Slide/>
      <Slide/>
      
    </AppWrapper>
  );
}

export default App;
