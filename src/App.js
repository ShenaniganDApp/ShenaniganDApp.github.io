import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter as Router } from "react-router-dom";

const AppWrapper = styled.div``;
const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />

        <Home />
        <MainWrapper>
          <Contact />
          <About />
        </MainWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
