import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Code from "./components/Code";
import Footer from "./components/Footer";

const StyledApp = styled.main`
  padding: 0 10vw;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Code />
      <Footer />
    </StyledApp>
  );
};

export default App;
