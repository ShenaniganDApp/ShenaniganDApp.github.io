import React, { useRef, useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import { LandingSection, AboutSection } from './Sections';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppWrapper = styled.div``;

function App() {
  return (
    <Router>
      <AppWrapper id="top" />
      <Switch>
        <Route exact path="/">
          <LandingSection />
        </Route>
        <Route path="/explain">
          <AboutSection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
