import React, { useRef, useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import About from './About';
import Section from './styles/Section';
import { BrowserRouter as Router } from 'react-router-dom';

const AppWrapper = styled.div``;

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spacer = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
  display: block;
`;

function App() {
  const [heights, setHeights] = useState({});
  const contactRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    const contactHeight =
      -contactRef.current.boundingTop() - window.pageYOffset;
    const aboutHeight = -aboutRef.current.boundingTop() - window.pageYOffset;
    setHeights({
      contact: contactHeight,
      about: aboutHeight
    });
  }, [contactRef, aboutRef]);

  return (
    <Router>
      <AppWrapper id="top">
        <Header heights={heights} />
        <Home />
        <HomeWrapper>
          <Contact ref={contactRef} />
        </HomeWrapper>
        <Spacer src={require('./svg/spacer.svg')}></Spacer>
        <MainWrapper>
          <About ref={aboutRef} />
        </MainWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
