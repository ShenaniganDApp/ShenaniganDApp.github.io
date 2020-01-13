import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppWrapper = styled.div``;
function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Route path="/" component={Home}></Route>
        <Contact id="contact"/>
      </AppWrapper>
    </Router>
  );
}

export default App;
