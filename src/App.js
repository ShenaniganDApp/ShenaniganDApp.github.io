import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";

const AppWrapper = styled.div`
`;
function App() {
  return (
    <AppWrapper>
      <Header />
      <Home />
    </AppWrapper>
  );
}

export default App;
