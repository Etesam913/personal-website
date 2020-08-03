import React, { useEffect, useState, useRef } from "react";
import BasicInfo from "./components/BasicInfo";
import { theme } from "./components/themes";
import { Container } from "./components/Layouts";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const test = useRef(null);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  function updateDimensions() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }
  return (
    <ThemeProvider theme={theme}>
      <Container className="flex" direction="column">
        <BrowserRouter>
          <BodyContainer
            className="flex"
            margin="3.5rem auto 0 auto"
          >
            <BasicInfo />
            <Nav width={width}/>
          </BodyContainer>

          <Switch>
            <Route path="/" exact></Route>
            <Route path="/experience" exact></Route>
            <Route path="/about" exact></Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

const BodyContainer = styled(Container)`
  width: 100%;
  @media screen and (min-width: 1100px){
    width: 56.25rem !important;
  }
`;

export default App;
