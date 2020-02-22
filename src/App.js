import React, { useRef, useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import { LandingSection, AboutSection } from './Sections';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppWrapper = styled.div`
  /*Photo by Element5 Digital on Unsplash*/
  background-image: url(${require('./images/background.jpg')});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 50% 35%;
  z-index: -1;
  /* Preserve aspect ratio */
  min-width: 100%;
  min-height: 100%;
  @media (max-width: 768px) {
    body {
      height: 100vh;
    }
  }
`;

function App() {
  return (
    <Router>
      <AppWrapper id="top">
        <Switch>
          <Route exact path="/">
            <LandingSection />
          </Route>
          <Route path="/explain">
            <AboutSection />
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
