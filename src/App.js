import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import Contact from "./Contact";
import { HashRouter as Router, Route } from "react-router-dom";

const AppWrapper = styled.div``;
function App() {
  return (
    <Router basename="/">
      <AppWrapper>
        <Header />
        
        <Route path="/" exact component={Home}></Route>
        
        <Route path="contact" component={Contact}></Route>
        <Contact />
      </AppWrapper>
    </Router>
  );
}

export default App;
