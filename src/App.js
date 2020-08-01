import React, { useRef, useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import { LandingSection, AboutSection } from './Sections';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppWrapper = styled.div`
  /*Photo by Element5 Digital on Unsplash*/
  background-image: url(${require('./images/background.jpg')});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto, cover;
  background-position: 50% 35%;
  z-index: -1;
  /* Preserve aspect ratio */

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  @media (max-width: 768px) {
    background-image: url(${require('./images/background_mobile.png')});
    background-repeat: no-repeat;
    background-position: 0 0, 50%, 50%;
    background-size: auto, auto 30%;
  }
`;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppWrapper id="top">
        <Switch>
          <Route exact path="/">
            <LandingSection />
          </Route>
          <Route path="/explain">
            <AboutSection />
          </Route>
          <Route
            path="/join"
            component={() => {
              window.location.href = 'https://discord.gg/Tk8gAM9';
              return null;
            }}
          />
         <Route path="/*" render={() => <p>Not Found</p>}/>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
