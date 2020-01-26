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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [heights, setHeights] = useState({});
  const contactRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    const contactHeight = -contactRef.current.boundingTop() - window.pageYOffset;
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
        <MainWrapper>
          <Contact ref={contactRef} />
          <About ref={aboutRef} />
        </MainWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
